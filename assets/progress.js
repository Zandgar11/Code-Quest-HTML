document.addEventListener("DOMContentLoaded", function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser) {
        const chapter1Completed = localStorage.getItem(currentUser.sub + "-chapter1-completed");

        if (!chapter1Completed) {
            window.location.href = "chapters/chapter_1.html"; // Redirige vers le chapitre précédent
        }
    } else {
        window.location.href = "login.html"; // Redirige vers la page de connexion
    }
});
