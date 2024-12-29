 // JavaScript function for email validation
 function validateForm() {
    // Get email input value
    var email = document.getElementById("email").value;
    // Regular expression to validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Get the error message element
    var errorMessage = document.getElementById("email-error");

    // Check if email matches the pattern
    if (!email.match(emailPattern)) {
        // If invalid email, show error message
        errorMessage.textContent = "Please enter a valid email address.";
        return false; // Prevent form submission
    } else {
        // If email is valid, clear error message
        errorMessage.textContent = "";
        return true; // Allow form submission
    }
}