function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signinForm = document.getElementById("signin-form");
    var formTitle = document.getElementById("form-title");

    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
        signinForm.style.display = "block";
        formTitle.innerText = "signin";
    } else {
        loginForm.style.display = "block";
        signinForm.style.display = "none";
        formTitle.innerText = "Login";
    }
}

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

function validatesigninForm() {
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    if (newUsername === "" || newPassword === "") {
        alert("Please enter both new username and password.");
        return false;
    }

    // Additional validation logic can be added here

    return true;
}
