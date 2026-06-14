// Fallback dataset in case the database is disconnected or cannot be queried.
const FALLBACK_COLLEGES = [
  {
    "College Name": "COEP Technological University",
    "Website": "https://www.coeptech.ac.in/",
    "Address": "Wellesley Road, Shivajinagar, Pune 411005",
    "Fees": "₹1,42,240 per annum",
    "Branches": "Computer Science Engineering, Instrumentation and Control Engineering, Mechanical Engineering, Civil Engineering, E&TC, Electrical Engineering, Metallurgy and Materials technology, Artificial Intelligence and Machine Learning, Planning",
    "Cutoff Ranks": "Computer Science Engineering: 96, Instrumentation and Control Engineering: 1521, Mechanical Engineering: 2109, Civil Engineering: 4466, E&TC: 635, Electrical Engineering: 1341, Metallurgy and Materials technology: 6313, Robotics and Artificial Intelligence: 476, Manufacturing Science and Engineering: 3877",
    "Average Placement Package": "₹10 LPA",
    "Email": "info@coeptech.ac.in",
    "Contact No.": "+91 20 25507000",
    "name": "COEP Technological University",
    "cutoffs": { "general": 98.5, "obc": 97.2, "sc": 92.0, "st": 88.5 }
  },
  {
    "College Name": "Pune Institute of Computer Technology (PICT)",
    "Website": "https://pict.edu/",
    "Address": "Survey No. 27, Dhankawadi, Pune 411043",
    "Fees": "₹1,20,500 per annum",
    "Branches": "Computer Engineering, IT, Artificial Intelligence and Data Science, E&TC, Electronics and computer Engineering",
    "Cutoff Ranks": "Computer Engineering: 577; IT: 954; E&TC: 2092, Artificial Intelligence and Data Science: 1089, Electronics and computer Engineering: 1431",
    "Average Placement Package": "₹10.64 LPA",
    "Email": "registrar@pict.edu",
    "Contact No.": "+91 20 24371101",
    "name": "Pune Institute of Computer Technology (PICT)",
    "cutoffs": { "general": 97.8, "obc": 96.5, "sc": 91.2, "st": 87.0 }
  },
  {
    "College Name": "Vishwakarma Institute of Technology (VIT Pune)",
    "Website": "https://www.vit.edu/",
    "Address": "666, Upper Indira Nagar, Bibwewadi, Pune 411037",
    "Fees": "₹2,06,000 per annum",
    "Branches": "Computer Science and Engineering(Artificial Intelligence), IT, Mechanical, Civil, E&TC, Instrumentation and Control, Artificial Intelligence and Data Science",
    "Cutoff Ranks": "Computer Engineering: 2823, IT: 4035, Mechanical Engineering: 12151, Civil Engineering: 15906, E&TC: 7119",
    "Average Placement Package": "₹9.5 LPA",
    "Email": "admissions@vit.edu",
    "Contact No.": "+91 7058432258",
    "name": "Vishwakarma Institute of Technology (VIT Pune)",
    "cutoffs": { "general": 95.5, "obc": 94.0, "sc": 89.0, "st": 84.0 }
  },
  {
    "College Name": "Cummins College of Engineering for Women",
    "Website": "https://cumminscollege.in/",
    "Address": "Karvenagar, Pune 411052",
    "Fees": "₹1,75,436 per annum",
    "Branches": "Computer Engineering, IT, E&TC, Instrumentation and Control Engineering, Mechanical Engineering",
    "Cutoff Ranks": "Computer Engineering: 2160; IT: 3337; E&TC: 5862",
    "Average Placement Package": "₹17 LPA",
    "Email": "administrator@cumminscollege.in",
    "Contact No.": "+91 20 25311000",
    "name": "Cummins College of Engineering for Women",
    "cutoffs": { "general": 96.0, "obc": 94.8, "sc": 90.0, "st": 85.0 }
  },
  {
    "College Name": "Pimpri Chinchwad College of Engineering (PCCOE)",
    "Website": "https://www.pccoepune.com/",
    "Address": "Sector 26, Pradhikaran, Nigdi, Pune 411044",
    "Fees": "₹1,35,000 per annum",
    "Branches": "Computer Engineering, IT, E&TC, Mechanical Engineering, Civil Engineering",
    "Cutoff Ranks": "Computer Engineering: 3200; IT: 4100; E&TC: 7800",
    "Average Placement Package": "₹7.5 LPA",
    "Email": "admin@pccoepune.org",
    "Contact No.": "+91 20 27653168",
    "name": "Pimpri Chinchwad College of Engineering (PCCOE)",
    "cutoffs": { "general": 95.0, "obc": 93.5, "sc": 88.0, "st": 83.5 }
  },
  {
    "College Name": "MIT World Peace University (MIT-WPU)",
    "Website": "https://mitwpu.edu.in/",
    "Address": "Kothrud, Pune 411038",
    "Fees": "₹3,10,000 per annum",
    "Branches": "Computer Science, IT, Electronics, Mechanical, Civil, Chemical",
    "Cutoff Ranks": "Computer Science: 4500; IT: 5800; E&TC: 9200",
    "Average Placement Package": "₹8.5 LPA",
    "Email": "admissions@mitwpu.edu.in",
    "Contact No.": "+91 20 7117 7104",
    "name": "MIT World Peace University (MIT-WPU)",
    "cutoffs": { "general": 94.0, "obc": 92.5, "sc": 87.0, "st": 82.0 }
  },
  {
    "College Name": "Bharati Vidyapeeth College of Engineering (BVCOE)",
    "Website": "http://bvp.bharatividyapeeth.edu/",
    "Address": "Dhankawadi, Pune 411043",
    "Fees": "₹1,20,000 per annum",
    "Branches": "Computer, IT, Chemical, Electrical, Mechanical, Civil",
    "Cutoff Ranks": "Computer: 6500; IT: 8200; E&TC: 12000",
    "Average Placement Package": "₹6.0 LPA",
    "Email": "coepune@bharatividyapeeth.edu",
    "Contact No.": "+91 20 24107390",
    "name": "Bharati Vidyapeeth College of Engineering (BVCOE)",
    "cutoffs": { "general": 92.0, "obc": 90.0, "sc": 84.0, "st": 79.0 }
  },
  {
    "College Name": "D.Y. Patil College of Engineering",
    "Website": "https://www.dypiemr.ac.in/",
    "Address": "Akurdi, Pune 411044",
    "Fees": "₹1,30,000 per annum",
    "Branches": "Computer, IT, AI&DS, E&TC, Mechanical, Civil",
    "Cutoff Ranks": "Computer: 5900; IT: 7500; E&TC: 11000",
    "Average Placement Package": "₹6.5 LPA",
    "Email": "info@dypcoeakurdi.ac.in",
    "Contact No.": "+91 20 27653058",
    "name": "D.Y. Patil College of Engineering",
    "cutoffs": { "general": 93.0, "obc": 91.2, "sc": 85.5, "st": 80.0 }
  },
  {
    "College Name": "Sinhgad College of Engineering (SCOE)",
    "Website": "http://www.sinhgad.edu/",
    "Address": "Vadgaon Budruk, Pune 411041",
    "Fees": "₹1,15,000 per annum",
    "Branches": "Computer, IT, E&TC, Mechanical, Civil, Chemical, Biotech",
    "Cutoff Ranks": "Computer: 7800; IT: 9600; E&TC: 15000",
    "Average Placement Package": "₹5.2 LPA",
    "Email": "principal.scoe@sinhgad.edu",
    "Contact No.": "+91 20 24354705",
    "name": "Sinhgad College of Engineering (SCOE)",
    "cutoffs": { "general": 90.5, "obc": 88.5, "sc": 82.0, "st": 77.0 }
  },
  {
    "College Name": "AISSMS College of Engineering",
    "Website": "https://aissmscoe.com/",
    "Address": "Kennedy Road, Pune 411001",
    "Fees": "₹1,25,000 per annum",
    "Branches": "Computer, IT, Chemical, Civil, Electrical, Mechanical",
    "Cutoff Ranks": "Computer: 8200; IT: 10200; E&TC: 16000",
    "Average Placement Package": "₹5.5 LPA",
    "Email": "admission@aissmscoe.com",
    "Contact No.": "+91 20 26057660",
    "name": "AISSMS College of Engineering",
    "cutoffs": { "general": 89.5, "obc": 87.0, "sc": 81.0, "st": 76.0 }
  }
];

// Helper functions for matching and retrieving database fields
function getCollegeName(c) {
  return c.name || c['College Name'] || 'Unknown College';
}
function getCollegeFees(c) {
  return c.fees || c['Fees'] || 'N/A';
}
function getCollegeBranches(c) {
  if (Array.isArray(c.branches)) {
    if (c.branches.length > 0 && typeof c.branches[0] === 'object') {
      return c.branches.map(b => b.name).join(', ');
    }
    return c.branches.join(', ');
  }
  return c.branches || c['Branches'] || 'N/A';
}
function getCollegeAddress(c) {
  return c.location || c['Address'] || 'N/A';
}
function getCollegeWebsite(c) {
  return c.website || c['Website'] || '#';
}
function getCollegePlacement(c) {
  return c.placement || c['Average Placement Package'] || 'N/A';
}
function getCollegeEmail(c) {
  return c.email || c['Email'] || 'N/A';
}
function getCollegePhone(c) {
  return c.phone || c['Contact No.'] || 'N/A';
}
function getCollegeCutoffs(c) {
  if (Array.isArray(c.branches) && c.branches.length > 0 && typeof c.branches[0] === 'object') {
    return c.branches.map(b => {
      const gen = b.cutoffs ? b.cutoffs.general : 'N/A';
      return `${b.name} (${gen}%)`;
    }).join(' | ');
  }
  if (c.cutoffs) {
    return `General: ${c.cutoffs.general || 'N/A'}, OBC: ${c.cutoffs.obc || 'N/A'}, SC: ${c.cutoffs.sc || 'N/A'}, ST: ${c.cutoffs.st || 'N/A'}`;
  }
  return c['Cutoff Ranks'] || 'N/A';
}

// 1. Handling Student Registration & Login

// Tab Switching
function switchTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLoginBtn = document.getElementById("tabLoginBtn");
  const tabRegisterBtn = document.getElementById("tabRegisterBtn");

  if (tab === "login") {
    if (loginForm) loginForm.classList.remove("hidden");
    if (registerForm) registerForm.classList.add("hidden");
    
    if (tabLoginBtn) {
      tabLoginBtn.className = "flex-1 py-4 text-center font-semibold text-blue-700 border-b-2 border-blue-700 focus:outline-none";
    }
    if (tabRegisterBtn) {
      tabRegisterBtn.className = "flex-1 py-4 text-center font-semibold text-gray-500 hover:text-blue-600 border-b-2 border-transparent focus:outline-none";
    }
  } else {
    if (loginForm) loginForm.classList.add("hidden");
    if (registerForm) registerForm.classList.remove("hidden");
    
    if (tabLoginBtn) {
      tabLoginBtn.className = "flex-1 py-4 text-center font-semibold text-gray-500 hover:text-blue-600 border-b-2 border-transparent focus:outline-none";
    }
    if (tabRegisterBtn) {
      tabRegisterBtn.className = "flex-1 py-4 text-center font-semibold text-blue-700 border-b-2 border-blue-700 focus:outline-none";
    }
  }
}

// Student Registration (Sign Up)
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const score = parseFloat(document.getElementById("regScore").value);
    const category = document.getElementById("regCategory").value;
    const preferredBranch = document.getElementById("regBranch").value;
    const password = document.getElementById("regPassword").value;
    const state = document.getElementById("regState").value.trim();

    const payload = { name, email, phone, score, category, preferredBranch, password, state };

    try {
      const response = await fetch("/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`🎉 Registration Successful!\nWelcome, ${data.student.name}! You can now use the predictor.`);
        // Save to localStorage so predictor auto-fills
        localStorage.setItem("registeredStudent", JSON.stringify(data.student));
        prefillPredictorForm();
        registerForm.reset();
        document.getElementById("regState").value = "Maharashtra"; // Restore default
      } else {
        alert(`❌ Registration Failed: ${data.error || JSON.stringify(data.errors)}`);
      }
    } catch (error) {
      console.error("Error registering student:", error);
      // Fallback response for offline/disconnected DB status
      const simulatedStudent = { name, email, phone, score, category, preferredBranch, state };
      localStorage.setItem("registeredStudent", JSON.stringify(simulatedStudent));
      prefillPredictorForm();
      alert(`🎉 Registration Simulated!\nLocal Mode: Successfully registered ${name} (${category}) with score ${score}%.`);
      registerForm.reset();
      document.getElementById("regState").value = "Maharashtra";
    }
  });
}

// Student Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const payload = { email, password };

    try {
      const response = await fetch("/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`🎉 Login Successful!\nWelcome back, ${data.student.name}!`);
        localStorage.setItem("registeredStudent", JSON.stringify(data.student));
        prefillPredictorForm();
        loginForm.reset();
      } else {
        alert(`❌ Login Failed: ${data.error || JSON.stringify(data.errors)}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(`❌ Connection failed. Could not verify login details.`);
    }
  });
}

// Student Logout
function logoutStudent() {
  localStorage.removeItem("registeredStudent");
  // Clean Predictor Form
  const scoreInput = document.getElementById("percentileInput");
  const catInput = document.getElementById("categoryInput");
  const branchInput = document.getElementById("branchInput");
  if (scoreInput) scoreInput.value = "";
  if (catInput) catInput.value = "";
  if (branchInput) branchInput.value = "";

  prefillPredictorForm();
  alert("Logged out successfully.");
}

// UI State Updater
function updateAuthUI() {
  const saved = localStorage.getItem("registeredStudent");
  const profileCard = document.getElementById("profileCard");
  const authContainer = document.getElementById("authContainer");

  if (saved) {
    try {
      const student = JSON.parse(saved);
      if (profileCard && authContainer) {
        document.getElementById("profileName").textContent = student.name;
        document.getElementById("profileEmail").textContent = student.email || "N/A";
        document.getElementById("profileScore").textContent = student.score;
        document.getElementById("profileCategory").textContent = student.category;
        document.getElementById("profileBranch").textContent = student.preferredBranch;
        
        profileCard.classList.remove("hidden");
        authContainer.classList.add("hidden");
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    if (profileCard && authContainer) {
      profileCard.classList.add("hidden");
      authContainer.classList.remove("hidden");
    }
  }
}

// 2. Handling College Predictor
const predictForm = document.getElementById("predictForm");
const predictionResultDiv = document.getElementById("predictionResult");
const collegeListUl = document.getElementById("collegeList");

if (predictForm) {
  predictForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const score = parseFloat(document.getElementById("percentileInput").value);
    const category = document.getElementById("categoryInput").value;
    const branch = document.getElementById("branchInput").value;

    predictionResultDiv.classList.add("hidden");
    collegeListUl.innerHTML = "";

    let colleges = [];
    try {
      const response = await fetch(`/colleges/eligible-colleges?score=${score}&category=${category}&branch=${branch}`);
      if (response.ok) {
        colleges = await response.json();
      } else {
        throw new Error("API failed");
      }
    } catch (error) {
      console.warn("API query failed, falling back to local simulation data.");
      // Simulated filter logic for fallback
      let rawColleges = FALLBACK_COLLEGES.filter((col) => {
        if (col.cutoffs && col.cutoffs[category] !== undefined) {
          return score >= col.cutoffs[category];
        }
        return true; 
      });

      if (branch !== "All") {
        rawColleges = rawColleges.filter((col) => {
          const branchesStr = getCollegeBranches(col).toLowerCase();
          const query = branch.toLowerCase();
          if (query === 'cs') {
            return branchesStr.includes('computer') || branchesStr.includes('cs');
          }
          if (query === 'entc') {
            return branchesStr.includes('electronics') || branchesStr.includes('e&tc') || branchesStr.includes('entc');
          }
          if (query === 'ai & ds') {
            return branchesStr.includes('artificial intelligence') || branchesStr.includes('ai & ds') || branchesStr.includes('data science') || branchesStr.includes('ai');
          }
          return branchesStr.includes(query) || branchesStr.includes("all");
        });
      }

      colleges = rawColleges.map(col => {
        const branchesList = getCollegeBranches(col).split(',').map(name => name.trim());
        return {
          name: getCollegeName(col),
          fees: getCollegeFees(col),
          eligibleBranches: branchesList.map(name => ({
            name: name,
            cutoffs: col.cutoffs || { [category]: score }
          }))
        };
      });
    }

    // Displaying the results
    if (colleges.length > 0) {
      colleges.forEach((col) => {
        const li = document.createElement("li");
        li.className = "py-2 border-b border-green-200 flex justify-between items-center";

        const nameSpan = document.createElement("span");
        nameSpan.className = "font-medium text-green-900";
        
        const collegeName = col.name;
        // Build branch list showing names and cutoffs dynamically
        let branchesList = "";
        if (col.eligibleBranches && Array.isArray(col.eligibleBranches)) {
          branchesList = col.eligibleBranches.map(b => {
            const cutoffVal = b.cutoffs && b.cutoffs[category] !== undefined ? `${b.cutoffs[category]}%` : 'N/A';
            return `${b.name} (${cutoffVal})`;
          }).join(', ');
        } else {
          branchesList = col.branches || "N/A";
        }
        nameSpan.innerHTML = `<strong>${collegeName}</strong><br><span class="text-xs text-gray-500 font-normal">Eligible for: ${branchesList}</span>`;

        const badgeSpan = document.createElement("span");
        badgeSpan.className = "bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold whitespace-nowrap ml-4";
        
        let minCutoff = "N/A";
        if (col.eligibleBranches && Array.isArray(col.eligibleBranches)) {
          const cutoffsList = col.eligibleBranches.map(b => b.cutoffs ? b.cutoffs[category] : null).filter(c => typeof c === 'number');
          if (cutoffsList.length > 0) {
            minCutoff = Math.min(...cutoffsList) + "%";
          }
        }
        badgeSpan.textContent = `Min Cutoff: ${minCutoff}`;

        li.appendChild(nameSpan);
        li.appendChild(badgeSpan);
        collegeListUl.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.className = "py-4 text-center text-gray-500 italic";
      li.textContent = "No colleges found matching your score and branch. Try lowering filters.";
      collegeListUl.appendChild(li);
    }

    predictionResultDiv.classList.remove("hidden");
    predictionResultDiv.scrollIntoView({ behavior: "smooth" });
  });
}

// 3. Handling College Info Modal Popup
async function showCollegeInfo(shortName) {
  const modal = document.getElementById("collegeModal");
  const detailsDiv = document.getElementById("collegeDetails");

  detailsDiv.innerHTML = `<div class="text-center py-6 text-gray-600">Loading details...</div>`;
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  let collegeList = [];
  try {
    const response = await fetch("/colleges");
    if (response.ok) {
      collegeList = await response.json();
    } else {
      throw new Error("Failed to load");
    }
  } catch (error) {
    console.warn("Could not fetch colleges from server, using fallback details.");
    collegeList = FALLBACK_COLLEGES;
  }

  // Find college that matches shortName
  const college = collegeList.find(c => {
    const fullName = getCollegeName(c).toLowerCase();
    const query = shortName.toLowerCase();
    if (fullName.includes(query) || query.includes(fullName)) return true;
    const abbreviationMap = {
      'pict': ['pune institute of computer technology', 'pict'],
      'pccoe': ['pimpri chinchwad', 'pccoe'],
      'bvcoe': ['bharati vidyapeeth', 'bvcoe'],
      'dypatil': ['d.y. patil', 'dypatil', 'dy patil'],
      'aissms': ['all india shri shivaji', 'aissms'],
      'mit-wpu': ['maharashtra institute of technology', 'mit-wpu', 'mit world peace university']
    };
    if (abbreviationMap[query]) {
      return abbreviationMap[query].some(term => fullName.includes(term));
    }
    return false;
  });

  if (college) {
    const name = getCollegeName(college);
    const address = getCollegeAddress(college);
    const fees = getCollegeFees(college);
    const branches = getCollegeBranches(college);
    const cutoffs = getCollegeCutoffs(college);
    const packageInfo = getCollegePlacement(college);
    const email = getCollegeEmail(college);
    const phone = getCollegePhone(college);
    const website = getCollegeWebsite(college);

    detailsDiv.innerHTML = `
      <h3 class="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">${name}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p class="mb-1"><strong class="text-gray-700">📍 Location:</strong> ${address}</p>
          <p class="mb-1"><strong class="text-gray-700">💵 Fees:</strong> ${fees}</p>
          <p class="mb-1"><strong class="text-gray-700">💼 Placement Package:</strong> ${packageInfo}</p>
        </div>
        <div>
          <p class="mb-1"><strong class="text-gray-700">✉️ Email:</strong> <a href="mailto:${email}" class="text-blue-600 hover:underline">${email}</a></p>
          <p class="mb-1"><strong class="text-gray-700">📞 Phone:</strong> <a href="tel:${phone}" class="text-blue-600 hover:underline">${phone}</a></p>
          <p class="mb-1"><strong class="text-gray-700">🌐 Website:</strong> <a href="${website}" target="_blank" class="text-blue-600 hover:underline font-semibold">Visit Site</a></p>
        </div>
      </div>
      <div class="mt-4 border-t pt-2">
        <p class="mb-2"><strong class="text-gray-700">📚 Available Branches:</strong></p>
        <p class="text-gray-600 bg-gray-50 p-2 rounded border text-xs">${branches}</p>
      </div>
      <div class="mt-3">
        <p class="mb-1"><strong class="text-gray-700">🎯 Cutoff Criteria:</strong></p>
        <p class="text-gray-600 bg-gray-50 p-2 rounded border text-xs">${cutoffs}</p>
      </div>
    `;
  } else {
    detailsDiv.innerHTML = `
      <h3 class="text-2xl font-bold text-red-600 mb-2">College Details Not Found</h3>
      <p class="text-gray-600">Information for <strong>${shortName}</strong> was not found in the database. Please check your data source connection.</p>
    `;
  }
}

function closeModal() {
  const modal = document.getElementById("collegeModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// 4. Prefill College Predictor form
function prefillPredictorForm() {
  updateAuthUI();
  const saved = localStorage.getItem("registeredStudent");
  if (saved) {
    try {
      const student = JSON.parse(saved);
      const scoreInput = document.getElementById("percentileInput");
      const catInput = document.getElementById("categoryInput");
      const branchInput = document.getElementById("branchInput");

      if (scoreInput && student.score !== undefined) {
        scoreInput.value = student.score;
      }
      if (catInput && student.category) {
        catInput.value = student.category;
      }
      if (branchInput && student.preferredBranch) {
        branchInput.value = student.preferredBranch;
      }
    } catch (e) {
      console.error("Error parsing saved student data:", e);
    }
  }
}

// Automatically prefill predictor on page load
document.addEventListener("DOMContentLoaded", prefillPredictorForm);

// Global exposure for HTML onclick attributes
window.showCollegeInfo = showCollegeInfo;
window.closeModal = closeModal;
window.switchTab = switchTab;
window.logoutStudent = logoutStudent;
