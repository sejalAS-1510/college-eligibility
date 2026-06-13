import os
from pymongo import MongoClient

# Safe load of MONGO_URI from .env
def load_mongo_uri():
    if os.path.exists('.env'):
        with open('.env', 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                if line.startswith('MONGO_URI='):
                    return line.split('=', 1)[1].strip().strip('"').strip("'")
    return "mongodb://localhost:27017/college-eligibility"

# ==== CONFIGURATION ====
MONGO_URI = load_mongo_uri()
DB_NAME = "College-Eligibility"
COLLEGES_COLLECTION = "colleges"
STUDENTS_COLLECTION = "students"
# ========================

try:
    # 1. Connect to MongoDB
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    colleges = list(db[COLLEGES_COLLECTION].find())
    students = list(db[STUDENTS_COLLECTION].find())

    print("Connected to MongoDB successfully!\n")

    # 2. Colleges Summary
    print(f"Total Colleges in '{COLLEGES_COLLECTION}': {len(colleges)}\n")

    print("Sample Colleges (first 5):")
    for col in colleges[:5]:
        print(f"- {col.get('name', 'N/A')} | Fees: {col.get('fees', 'N/A')}")

    # 3. Students Summary
    print(f"\nTotal Students in '{STUDENTS_COLLECTION}': {len(students)}\n")

    print("Sample Students (first 5):")
    for stu in students[:5]:
        print(f"- {stu.get('name', 'N/A')} | Score: {stu.get('score', 'N/A')} | Category: {stu.get('category', 'N/A')}")

except Exception as e:
    print(f"Error: {e}")
