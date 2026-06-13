import requests # pyright: ignore[reportMissingModuleSource]

BASE_URL = "http://localhost:5000"


def add_student():
    print(f"\n📡 Adding Student → {BASE_URL}/student")

    student_data = {
        "name": "Backend Test User",
        "score": 85,
        "category": "obc",
        "state": "Maharashtra"
    }

    try:
        response = requests.post(f"{BASE_URL}/student", json=student_data)
        if response.status_code == 201:
            print(f"✅ Student Added: {response.json()}")
        else:
            print(f"❌ Failed to add student: {response.status_code} | {response.text}")
    except Exception as e:
        print(f"❌ Request Error: {e}")


def get_all_colleges():
    print(f"\n📡 Fetching All Colleges → {BASE_URL}/colleges")
    try:
        response = requests.get(f"{BASE_URL}/colleges")
        if response.status_code == 200:
            colleges = response.json()
            print(f"✅ {len(colleges)} Colleges Found:")
            for college in colleges[:5]:  # show only first 5
                print(f"- {college.get('College Name', 'N/A')} | Fees: {college.get('Fees', 'N/A')}")
        else:
            print(f"❌ Failed to fetch colleges: {response.status_code} | {response.text}")
    except Exception as e:
        print(f"❌ Request Error: {e}")


def get_eligible_colleges(score, category):
    print(f"\n📡 Fetching Eligible Colleges → {BASE_URL}/colleges/eligible-colleges?score={score}&category={category}")
    try:
        response = requests.get(f"{BASE_URL}/colleges/eligible-colleges",
                                params={"score": score, "category": category})
        if response.status_code == 200:
            colleges = response.json()
            print(f"✅ {len(colleges)} Eligible Colleges Found:")
            for college in colleges:
                print(f"- {college.get('College Name', 'N/A')} | Cutoff: {college.get('Cutoff Ranks', 'N/A')}")
        else:
            print(f"❌ Failed to fetch eligible colleges: {response.status_code} | {response.text}")
    except Exception as e:
        print(f"❌ Request Error: {e}")


if __name__ == "__main__":
    add_student()
    get_all_colleges()
    get_eligible_colleges(85, "obc")
