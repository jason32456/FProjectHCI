function validateForm(event) {
    event.preventDefault(); 

    let isValid = true;

    clearErrors();

    const username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = "Username must be at least 3 characters long.";
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    const address = document.getElementById('address').value;
    if (address.length < 10) {
        document.getElementById('addressError').textContent = "Address must be at least 10 characters long.";
        isValid = false;
    }

    const dob = new Date(document.getElementById('dob').value);
    if (!validateAge(dob, 18)) {
        document.getElementById('dobError').textContent = "You must be at least 18 years old.";
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (!validatePassword(password)) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters long, including at least one number and one letter.";
        isValid = false;
    }

    const gender = document.getElementById('gender').value;
    if (gender === "") {
        document.getElementById('genderError').textContent = "Please select your gender.";
        isValid = false;
    }

    const privacy = document.getElementById('privacy').checked;
    if (!privacy) {
        document.getElementById('privacyError').textContent = "You must agree to the privacy policy.";
        isValid = false;
    }

    if (isValid) {
        window.location.href = 'index.html';
    }

    return isValid;
}

function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

function validateAge(dob, minAge) {
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return age > minAge;
    }
    return age >= minAge;
}

function validatePassword(password) {
    let hasNumber = false;
    let hasLetter = false;

    if (password.length < 8) return false;

    for (let i = 0; i < password.length; i++) {
        if (/\d/.test(password[i])) hasNumber = true;
        if (/[a-zA-Z]/.test(password[i])) hasLetter = true;
    }

    return hasNumber && hasLetter;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let element of errorElements) {
        element.textContent = '';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider .dish-section');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].scrollIntoView({ behavior: 'smooth' });

        currentIndex = (currentIndex + 1) % slides.length;
    }

    setInterval(showNextSlide, 3000); 
});