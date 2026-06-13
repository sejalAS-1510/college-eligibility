from pymongo import MongoClient # type: ignore

# ==== CONFIGURATION ====
MONGO_URI = "mongodb+srv://Sejal_shinkar:Sejal%231510@cluster0.pzbwbvm.mongodb.net/College-Eligibility?retryWrites=true&w=majority&appName=Cluster0"
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

    print("✅ Connected to MongoDB successfully!\n")

    # 2. Colleges Summary
    print(f"📌 Total Colleges in '{COLLEGES_COLLECTION}': {len(colleges)}\n")

    print("🎓 Sample Colleges (first 5):")
    for col in colleges[:5]:
        print(f"- {col.get('College Name', 'N/A')} | Fees: {col.get('Fees', 'N/A')}")

    # 3. Students Summary
    print(f"\n📌 Total Students in '{STUDENTS_COLLECTION}': {len(students)}\n")

    print("👨‍🎓 Sample Students (first 5):")
    for stu in students[:5]:
        print(f"- {stu.get('name', 'N/A')} | Score: {stu.get('score', 'N/A')} | Category: {stu.get('category', 'N/A')}")

except Exception as e:
    print(f"❌ Error: {e}")
