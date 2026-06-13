import pandas as pd # type: ignore
from pymongo import MongoClient # type: ignore

# ✅ 1. Load the updated Excel file
excel_file = "final_college_data_nonautomatic3.xlsx"

try:
    df = pd.read_excel(excel_file)

    # ✅ 2. Connect to MongoDB
    client = MongoClient("mongodb+srv://Sejal_shinkar:Sejal%231510@cluster0.pzbwbvm.mongodb.net/College-Eligibility?retryWrites=true&w=majority&appName=Cluster0")

    db = client["College-Eligibility"]  # database name
    collection = db["colleges"]        # collection name

    # ✅ 3. Optional: Clear old college data before inserting new
    collection.delete_many({})
    print("🗑️ Old college data deleted.")

    # ✅ 4. Insert updated college data
    data = df.to_dict(orient="records")
    collection.insert_many(data)
    print("✅ New college data inserted successfully!")

except FileNotFoundError:
    print("❌ Excel file not found. Make sure it's in the same folder.")
except Exception as e:
    print(f"❌ Error: {e}")
