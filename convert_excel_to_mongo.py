import os
import pandas as pd
from pymongo import MongoClient

# Safe load of MONGO_URI from .env
def load_mongo_uri():
    if os.path.exists('.env'):
        with open('.env', 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                if line.startswith('MONGO_URI='):
                    return line.split('=', 1)[1].strip().strip('"').strip("'")
    return "mongodb://localhost:27017/college-eligibility"

# Parse cutoff range and departments to estimate cutoffs per branch
def estimate_branch_cutoffs(departments_str, cutoff_str):
    try:
        if not cutoff_str or pd.isna(cutoff_str) or str(cutoff_str).strip().lower() == 'n/a':
            min_cutoff = max_cutoff = 80.0
        else:
            clean = str(cutoff_str).replace('%', '').strip()
            parts = [float(x.strip()) for x in clean.split('-') if x.strip()]
            if len(parts) == 2:
                min_cutoff, max_cutoff = parts[0], parts[1]
            elif len(parts) == 1:
                min_cutoff = max_cutoff = parts[0]
            else:
                min_cutoff = max_cutoff = 80.0
    except Exception:
        min_cutoff = max_cutoff = 80.0

    if not departments_str or pd.isna(departments_str) or str(departments_str).strip().lower() == 'n/a':
        departments_list = ["Engineering"]
    else:
        departments_list = [d.strip() for d in str(departments_str).split(',') if d.strip()]

    branches_data = []
    for dept in departments_list:
        dept_lower = dept.lower()
        
        # Estimate base percentile cutoff for this branch
        if 'computer' in dept_lower or 'cs' in dept_lower:
            base_cutoff = max_cutoff
        elif 'information' in dept_lower or 'it' in dept_lower:
            base_cutoff = max_cutoff - 0.2 if max_cutoff - 0.2 > min_cutoff else min_cutoff
        elif 'artificial' in dept_lower or 'ai' in dept_lower or 'data science' in dept_lower:
            base_cutoff = max_cutoff - 0.5 if max_cutoff - 0.5 > min_cutoff else min_cutoff
        elif 'electronics' in dept_lower or 'telecommunication' in dept_lower or 'e&tc' in dept_lower or 'entc' in dept_lower:
            base_cutoff = min_cutoff + (max_cutoff - min_cutoff) * 0.4
        elif 'electrical' in dept_lower:
            base_cutoff = min_cutoff + (max_cutoff - min_cutoff) * 0.2
        else:
            base_cutoff = min_cutoff

        # Generate category cutoffs based on estimated branch base cutoff
        branches_data.append({
            "name": dept,
            "cutoffs": {
                "general": round(base_cutoff, 2),
                "obc": round(max(0.0, base_cutoff - 1.5), 2),
                "sc": round(max(0.0, base_cutoff - 6.0), 2),
                "st": round(max(0.0, base_cutoff - 10.0), 2)
            }
        })
    return branches_data

# Configuration
EXCEL_FILE = "final_college_data_nonautomatic3.xlsx"
MONGO_URI = load_mongo_uri()
DB_NAME = "College-Eligibility"
COLLECTION_NAME = "colleges"

try:
    print(f"Reading {EXCEL_FILE}...")
    df = pd.read_excel(EXCEL_FILE)
    df = df.fillna("N/A")

    print(f"Connecting to MongoDB...")
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]

    print("Clearing old college data...")
    collection.delete_many({})

    colleges_list = []
    for _, row in df.iterrows():
        # Clean fees text
        fees_cleaned = str(row.get("Fees", "N/A")).replace("\u20b9", "Rs. ")

        college_doc = {
            "name": str(row.get("College Name", "Unknown College")),
            "branches": estimate_branch_cutoffs(row.get("Departments"), row.get("Cutoff")),
            "fees": fees_cleaned,
            "location": str(row.get("Address", "N/A")),
            "website": str(row.get("Website", "#")),
            "placement": str(row.get("Placement", "N/A")),
            "email": str(row.get("Email", "N/A")),
            "phone": str(row.get("Contact No.", "N/A")),
        }
        colleges_list.append(college_doc)

    print("Inserting formatted college records...")
    result = collection.insert_many(colleges_list)
    print(f"Seeding Complete! Successfully inserted {len(result.inserted_ids)} records with branch-level cutoffs.")

except FileNotFoundError:
    print(f"Error: {EXCEL_FILE} not found.")
except Exception as e:
    print(f"Error: {e}")
