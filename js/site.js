document.addEventListener("DOMContentLoaded", initialise);

function initialise() {
    const simpleForm = document.getElementById("simpleForm");

    if(simpleForm) {
        simpleForm.addEventListener("submit", handleSubmission);
        simpleForm.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", function () {
                this.setCustomValidity("");
            });
        });
	}
}

function validateForm() {
    const username = document.getElementById("username");
    const email = document.getElementById("emailAddress");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Clear previous messages
    username.setCustomValidity("");
    email.setCustomValidity("");
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");

    const emailUserName = /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;

    if (!emailUserName.test(email.value.trim())) {
        email.setCustomValidity("Please enter a valid email address.");
        email.reportValidity();
        return false;
    }

    if (username.value.trim().length < 5) {
        username.setCustomValidity("Username must be at least 5 characters long.");
        username.reportValidity();
        return false;
    }

    if (password.value.length < 10) {
        password.setCustomValidity("Password must be at least 10 characters long.");
        password.reportValidity();
        return false;
    }

    if (!/[A-Za-z0-9]/.test(password.value)) {
        password.setCustomValidity(
            "Password must contain at least one letter or number."
        );
        password.reportValidity();
        return false;
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        confirmPassword.reportValidity();
        return false;
    }

    return true;
}

function handleSubmission(event) {
    event.preventDefault();

    if(!validateForm()) {
        return; 
	}
    else {        
        alert('Thank you! The form has been successfully validated.');
        
        document.getElementById('simpleForm').reset();
	} 
}