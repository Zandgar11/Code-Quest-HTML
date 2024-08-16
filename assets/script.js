document.addEventListener("DOMContentLoaded", function() {
    console.log("CodeQuest est prêt!");

    // Défi 1 - Modification de la variable 'x'
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
                setTimeout(function() {
                    window.location.href = "chapter_1_success.html";
                }, 2000);
            } else {
                result.textContent = "Essayez encore ! Ce n'est pas la bonne valeur.";
                result.style.color = "#e5e5e5"; // Couleur du texte en cas d'échec
            }
        });
    }

    // Défi 2 - Addition de deux variables 'x' et 'y'
    const submitBtn2 = document.getElementById("submitBtn2");
    const editor2 = document.getElementById("editor2");
    const result2 = document.getElementById("result2");

    if (submitBtn2) {
        submitBtn2.addEventListener("click", function() {
            const code2 = editor2.value.trim();
            console.log("Code soumis :", code2);

            if (code2 === "somme = x + y") {
                result2.textContent = "Bravo ! Vous avez correctement additionné les variables.";
                result2.style.color = "#69b668";
            } else {
                result2.textContent = "Essayez encore ! Ce n'est pas la bonne formule.";
                result2.style.color = "#e5e5e5";
            }
        });
    }

    // Défi 3 - Vérification du type d'une variable 'nom'
    const submitBtn3 = document.getElementById("submitBtn3");
    const editor3 = document.getElementById("editor3");
    const result3 = document.getElementById("result3");

    if (submitBtn3) {
        submitBtn3.addEventListener("click", function() {
            const code3 = editor3.value.trim();
            console.log("Code soumis :", code3);

            const nomPattern = /nom\s*=\s*".*"/;  // Regex pour vérifier n'importe quelle valeur de chaîne
            const typeCheck = /type\(nom\)/;  // Regex pour vérifier la fonction type

            if (nomPattern.test(code3) && typeCheck.test(code3)) {
                result3.textContent = "Bravo ! Vous avez vérifié le type de la variable.";
                result3.style.color = "#69b668"; // Couleur du texte en cas de succès
            } else {
                result3.textContent = "Essayez encore ! Ce n'est pas la bonne réponse.";
                result3.style.color = "#e5e5e5"; // Couleur du texte en cas d'échec
            }
        });
    }

    // Gestion des défis supplémentaires (si nécessaire)
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
