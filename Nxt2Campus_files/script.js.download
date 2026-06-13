// script.js

document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.querySelector('form');

  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = registerForm.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = registerForm.querySelector('input[placeholder="Email"]').value.trim();
    const mobile = registerForm.querySelector('input[placeholder="Mobile Number"]').value.trim();
    const percentile = parseFloat(registerForm.querySelector('input[placeholder="MHT-CET Percentile"]').value);
    const category = registerForm.querySelector('select:nth-of-type(1)').value;
    const branch = registerForm.querySelector('select:nth-of-type(2)').value;
    const password = registerForm.querySelector('input[placeholder="Password"]').value;

    // Basic validation
    if (!name || !email || !mobile || isNaN(percentile) || !category || !branch || !password) {
      alert("Please fill all fields correctly.");
      return;
    }

    // Simulate storing in localStorage (for demo, since there's no backend yet)
    const student = {
      name,
      email,
      mobile,
      percentile,
      category,
      branch,
      password,
      registeredAt: new Date().toISOString()
    };

    // Save to localStorage
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    // Show success message
    alert(`🎉 Registration Successful!\nWelcome, ${name}!`);

    // Optionally clear the form
    registerForm.reset();
  });
});
