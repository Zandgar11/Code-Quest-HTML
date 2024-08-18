//login.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const messageDiv = document.getElementById("message");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche le formulaire de se soumettre normalement

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            // Vérifie les informations d'identification
            const storedPassword = localStorage.getItem(username);
            if (storedPassword === password) {
                localStorage.setItem("currentUser", username); // Stocke l'utilisateur connecté
                window.location.href = "index.html"; // Redirige vers la page d'accueil ou une autre page
            } else {
                messageDiv.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
                messageDiv.style.color = "#e5e5e5"; // Couleur du texte en cas d'erreur
            }
        });
    }
});
