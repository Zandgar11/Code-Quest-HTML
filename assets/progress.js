//progress.js

document.addEventListener("DOMContentLoaded", function() {
    const currentUser = localStorage.getItem("currentUser");
    
    if (currentUser) {
        const chapter1Completed = localStorage.getItem(currentUser + "-chapter1-completed");

        // Désactive la redirection si le chapitre 1 n'est pas complété
        // if (!chapter1Completed) {
        //     window.location.href = "chapters/chapter_1.html"; // Redirige vers le chapitre précédent
        // }
    } else {
        // Désactive la redirection vers la page de connexion
        // window.location.href = "login.html"; // Redirige vers la page de connexion
    }
});
