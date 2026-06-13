import requests
import json
import random

BASE_URL = "http://localhost:5000"

def add_student(name, score, category, state):
    """POST /student -> Add a new student (Sign Up)"""
    url = f"{BASE_URL}/student"
    email = f"test_{random.randint(1000, 9999)}@example.com"
    payload = {
        "name": name,
        "email": email,
        "password": "password123",
        "phone": "9876543210",
        "score": score,
        "category": category,
        "preferredBranch": "CS",
        "state": state
    }
    print(f"\nAdding/Signing Up Student -> {url}")
    try:
        res = requests.post(url, json=payload)
        print(f"Sign Up Status Code: {res.status_code}")
        data = res.json()
        print(f"Sign Up Response Body: {json.dumps(data, indent=2)}")
        return payload
    except Exception as e:
        print(f"Failed to add student: {e}")
        return None

def login_student(email, password):
    """POST /student/login -> Log in student"""
    url = f"{BASE_URL}/student/login"
    payload = {
        "email": email,
        "password": password
    }
    print(f"\nLogging in Student -> {url}")
    try:
        res = requests.post(url, json=payload)
        print(f"Login Status Code: {res.status_code}")
        data = res.json()
        print(f"Login Response Body: {json.dumps(data, indent=2)}")
        return data.get("student")
    except Exception as e:
        print(f"Failed to log in student: {e}")
        return None

def get_eligible_colleges(score, category, branch="All"):
    """GET /eligible-colleges -> Filter eligible colleges based on branch and category"""
    url = f"{BASE_URL}/colleges/eligible-colleges?score={score}&category={category}&branch={branch}"
    print(f"\nFetching Eligible Colleges -> {url}")
    try:
        res = requests.get(url)
        res.raise_for_status()
        data = res.json()

        if isinstance(data, list):
            print(f"{len(data)} Eligible Colleges Found:")
            for college in data:
                branches_str = ", ".join([f"{b['name']} ({b['cutoffs'][category]}%)" for b in college.get('eligibleBranches', [])])
                print(f"   {college.get('name', 'Unknown College')} | Fees: {college.get('fees', 'N/A')} | Eligible Branches: {branches_str}")
        else:
            print(f"Response: {data}")
    except Exception as e:
        print(f"Failed to fetch eligible colleges: {e}")

if __name__ == "__main__":
    # 1. Sign Up
    student_payload = add_student("Sejal Shinkar", 92, "general", "Maharashtra")
    
    if student_payload:
        # 2. Log In
        logged_in_student = login_student(student_payload["email"], "password123")
        
        # 3. Get Eligible Colleges for 92 General with branch = "All"
        get_eligible_colleges(92, "general", "All")
        
        # 4. Get Eligible Colleges for 92 General with branch = "CS"
        get_eligible_colleges(92, "general", "CS")
