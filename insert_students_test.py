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
DATABASE_NAME = "College-Eligibility"

try:
    # Connect to MongoDB
    client = MongoClient(MONGO_URI)
    db = client[DATABASE_NAME]
    students_collection = db["students"]

    print("\nConnected to MongoDB successfully!")

    # Sample students
    students_data = [
        {"name": "Sejal", "score": 85, "category": "obc", "state": "Maharashtra"},
        {"name": "Ankit", "score": 92, "category": "general", "state": "Maharashtra"},
        {"name": "Priya", "score": 78, "category": "sc", "state": "Maharashtra"},
        {"name": "Rahul", "score": 60, "category": "st", "state": "Maharashtra"}
    ]

    # Insert or Update students (based on name)
    for student in students_data:
        result = students_collection.update_one(
            {"name": student["name"]},  # Search by name
            {"$set": student},          # Update with new data
            upsert=True                 # Insert if not found
        )
        if result.matched_count > 0:
            print(f"Updated student: {student['name']}")
        else:
            print(f"Inserted new student: {student['name']}")

    total_students = students_collection.count_documents({})
    print(f"\nTotal Students now in DB: {total_students}")

except Exception as e:
    print("Error:", e)
