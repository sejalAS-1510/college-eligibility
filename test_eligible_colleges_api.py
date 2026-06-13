import requests # type: ignore

# ✅ Change this if your server runs on a different port
BASE_URL = "http://localhost:5000"

def test_eligible_colleges(score, category):
    try:
        url = f"{BASE_URL}/colleges/eligible-colleges?score={score}&category={category}"
        print(f"\n📡 Sending Request → {url}")
        
        response = requests.get(url)
        
        if response.status_code == 200:
            print("✅ Response Received:")
            data = response.json()
            for college in data.get("eligibleColleges", []):
                print(f"🎓 {college['name']} | Cutoff: {college.get('cutoff', 'N/A')} | Fees: {college.get('fees', 'N/A')}")
        else:
            print(f"❌ Error {response.status_code}: {response.text}")
    except Exception as e:
        print(f"❌ Request failed: {e}")

if __name__ == "__main__":
    # ✅ Test Cases
    test_eligible_colleges(85, "obc")        # Should return eligible OBC colleges
    test_eligible_colleges(92, "general")    # High score → More colleges
    test_eligible_colleges(60, "st")         # Lower score → Fewer colleges
