//register.js

document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const messageDiv = document.getElementById("message");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche le formulaire de se soumettre normalement

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            if (password === confirmPassword) {
                // Enregistre les informations de l'utilisateur
                localStorage.setItem(username, password);
                localStorage.setItem("currentUser", username); // Connecte immédiatement l'utilisateur
                window.location.href = "index.html"; // Redirige vers la page d'accueil
            } else {
                messageDiv.textContent = "Les mots de passe ne correspondent pas.";
                messageDiv.style.color = "#e5e5e5"; // Couleur du texte en cas d'erreur
            }
        });
    }
});
