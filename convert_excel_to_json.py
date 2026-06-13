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

# 1. Load the updated Excel file
excel_file = "final_college_data_nonautomatic3.xlsx"

try:
    df = pd.read_excel(excel_file)

    # 2. Connect to MongoDB
    MONGO_URI = load_mongo_uri()
    client = MongoClient(MONGO_URI)

    db = client["College-Eligibility"]  # database name
    collection = db["colleges"]        # collection name

    # 3. Optional: Clear old college data before inserting new
    collection.delete_many({})
    print("Old college data deleted.")

    # 4. Insert updated college data
    data = df.to_dict(orient="records")
    collection.insert_many(data)
    print("New college data inserted successfully!")

except FileNotFoundError:
    print("Excel file not found. Make sure it's in the same folder.")
except Exception as e:
    print(f"Error: {e}")
