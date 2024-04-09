document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Check login credentials (replace with your authentication logic)
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "demo" && password === "password") {
            // Successful login, redirect to another page or perform further actions
            window.location.href = "home.html";
        } else {
            // Display an error message
            errorMessage.innerText = "Invalid username or password";
            errorMessage.style.display = "block";
        }
    });
});
