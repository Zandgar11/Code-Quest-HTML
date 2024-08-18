document.addEventListener("DOMContentLoaded", function() {
    const currentUserString = localStorage.getItem("currentUser");
    let currentUser = null;

    try {
        currentUser = JSON.parse(currentUserString);
    } catch (e) {
        console.error("Invalid JSON in currentUser", e);
    }

    if (currentUser) {
        const chapter1Completed = localStorage.getItem(currentUser.sub + "-chapter1-completed");

        if (!chapter1Completed) {
            window.location.href = "chapters/chapter_1.html"; // Redirige vers le chapitre précédent
        }
    } else {
        //window.location.href = "login.html"; // Redirige vers la page de connexion
    }
});
