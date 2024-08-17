document.addEventListener("DOMContentLoaded", function() {
    const currentUser = localStorage.getItem("currentUser");
    
    if (currentUser) {
        const chapter1Completed = localStorage.getItem(currentUser + "-chapter1-completed");

        // Redirige l'utilisateur s'il n'a pas complété le chapitre précédent
        if (!chapter1Completed) {
            window.location.href = "chapters/chapter_1.html"; // Redirige vers le chapitre précédent
        }
    } else {
        window.location.href = "login.html"; // Redirige vers la page de connexion
    }
});
