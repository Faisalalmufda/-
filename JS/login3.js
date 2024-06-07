// JavaScript code to handle login and registration
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Perform login authentication (you can add your logic here)
    // For demonstration, let's just log the values to the console
    console.log("Username: " + username);
    console.log("Password: " + password);
});

document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    // Get input values
    var regUsername = document.getElementById("regUsername").value;
    var email = document.getElementById("email").value;
    var regPassword = document.getElementById("regPassword").value;
    // Perform registration (you can add your logic here)
    // For demonstration, let's just log the values to the console
    console.log("Username: " + regUsername);
    console.log("Email: " + email);
    console.log("Password: " + regPassword);
});
