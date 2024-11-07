// Client-side form validation

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => error.style.display = 'none');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    if (username.length < 4) {
        document.getElementById('usernameError').textContent = 'Username must be at least 4 characters';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
