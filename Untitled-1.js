// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the form and its elements
    const form = document.querySelector("form");
    const firstName = document.querySelector("input[placeholder=' ']");
    const email = document.querySelector("input[type='text'][placeholder=' ']");
    const mobile = document.querySelector("input[type='text'][placeholder=' ']:nth-of-type(2)");
    const password = document.querySelector("input[type='password']");
    const feedback = document.querySelector("textarea");
    
    // Validate form on submit
    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            alert("Form submitted successfully!");
        }
    });

    // Function to validate the form
    function validateForm() {
        let isValid = true;

        // Validate first name
        if (firstName.value.trim() === "") {
            alert("First Name cannot be empty.");
            isValid = false;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate mobile number (only digits, 10 characters)
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile.value)) {
            alert("Please enter a valid 10-digit mobile number.");
            isValid = false;
        }

        // Validate password strength
        if (password.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        }

        // Validate feedback (ensure it's not just default text)
        if (feedback.value.trim().length < 5) {
            alert("Feedback should be at least 5 characters long.");
            isValid = false;
        }

        return isValid;
    }
});
