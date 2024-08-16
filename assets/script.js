document.addEventListener("DOMContentLoaded", function() {
    console.log("CodeQuest est prêt!");
});

document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const editor = document.getElementById("editor");
    const result = document.getElementById("result");

    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            const code = editor.value.trim();
            console.log("Code soumis :", code);

            if (code === "x = 20") {
                result.textContent = "Bravo ! Vous avez correctement modifié la variable.";
                result.style.color = "#69b668"; // Couleur du texte en cas de succès
                // Rediriger vers la page des défis supplémentaires après 2 secondes
                setTimeout(function() {
                    window.location.href = "chapter_1_success.html";
                }, 2000);
            } else {
                result.textContent = "Essayez encore ! Ce n'est pas la bonne valeur.";
                result.style.color = "#e5e5e5"; // Couleur du texte en cas d'échec
            }
        });
    }

    // Gestion des défis supplémentaires
    const submitAdditionalBtn = document.getElementById("submitAdditionalBtn");
    const additionalEditor = document.getElementById("additional-editor");
    const additionalResult = document.getElementById("additional-result");

    if (submitAdditionalBtn) {
        submitAdditionalBtn.addEventListener("click", function() {
            const additionalCode = additionalEditor.value.trim();
            console.log("Défis supplémentaires soumis :", additionalCode);

            // Ici, vous pouvez ajouter des validations pour les défis supplémentaires si nécessaire
            additionalResult.textContent = "Défis supplémentaires soumis !";
            additionalResult.style.color = "#69b668"; // Couleur du texte en cas de succès
        });
    }
});
