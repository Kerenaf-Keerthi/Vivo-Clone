document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for validation

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(error) {
        error.style.display = 'none';
    });

    let isValid = true;

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Name validation
    if (name.trim() === "") {
        document.getElementById('nameError').textContent = "Name is required.";
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Enter a valid email.";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters long.";
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {

        // Store the name in localStorage
        localStorage.setItem('userName', name);

        // Submit the form (for demonstration purposes, just alert)
        alert('Sign Up Successfully!');

        // Redirect immediately after successful validation
        window.location.href = "welcome.html";
    }
});
