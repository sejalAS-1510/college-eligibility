from pymongo import MongoClient # type: ignore

# ✅ Replace with your actual MongoDB Atlas credentials
MONGO_URI = "mongodb+srv://Sejal_shinkar:Sejal%231510@cluster0.pzbwbvm.mongodb.net/College-Eligibility?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_NAME = "College-Eligibility"

try:
    # ✅ Connect to MongoDB
    client = MongoClient(MONGO_URI)
    db = client[DATABASE_NAME]
    students_collection = db["students"]

    print("\n✅ Connected to MongoDB successfully!")

    # ✅ Sample students (modify as needed for testing)
    students_data = [
        {"name": "Sejal", "score": 85, "category": "obc", "state": "Maharashtra"},
        {"name": "Ankit", "score": 92, "category": "general", "state": "Maharashtra"},
        {"name": "Priya", "score": 78, "category": "sc", "state": "Maharashtra"},
        {"name": "Rahul", "score": 60, "category": "st", "state": "Maharashtra"}
    ]

    # ✅ Insert or Update students (based on name)
    for student in students_data:
        result = students_collection.update_one(
            {"name": student["name"]},  # Search by name
            {"$set": student},          # Update with new data
            upsert=True                 # Insert if not found
        )
        if result.matched_count > 0:
            print(f"🔄 Updated student: {student['name']}")
        else:
            print(f"✅ Inserted new student: {student['name']}")

    total_students = students_collection.count_documents({})
    print(f"\n📌 Total Students now in DB: {total_students}")

except Exception as e:
    print("❌ Error:", e)
