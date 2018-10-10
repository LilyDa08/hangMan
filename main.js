let motChoice = prompt("choisissez un mot de départ").toUpperCase();

let mot = Array.from(motChoice);

let goodLetter = []; // bonnes lettres trouvées.
let wrongLetter = []; // mauvaise lettres essayées.

let lettre; // lettre entrée par l'utilisateur.
let essaiNul = 0; // nombre d'essais ratés (max 6)
let essaiBon = 0; // nombre d'essais corrects
let essaiMax = 6;
let wordFound = false;
let divCase = document.querySelector("#good_letter");

function guessLetter() {

    while (essaiNul <= essaiMax && mot.toString() !== goodLetter.toString()) {
            lettre = prompt("Choisissez une lettre").toUpperCase();
            let inWord = false;

            for (i = 0; i < mot.length; i++) {

                if (lettre == mot[i]) {
                    goodLetter[i] = lettre;
                    inWord = true;
                    essaiBon++;
                    divCase.innerHTML=goodLetter.join('');
                    
                    if (mot.toString() == goodLetter.toString()) {
                        wordFound = true;
                        alert("well done! vous avez réussi en " + (essaiNul + essaiBon) + " essais");
                        return;
                    };
                }
            }

            if (inWord == false) {
                if (wrongLetter.includes(lettre) == false) {
                    essaiNul++;
                    wrongLetter.push(lettre);
                    alert("La lettre " + lettre + " n'est pas dans ce mot.\n" + wrongLetter + "\n Il vous reste " + (7 - essaiNul) + "essai(s).");
                } else {
                    alert("vous avez déjà essayé cette lettre !");
                }
            } else {
                alert("la lettre est bonne!\n" + goodLetter);
            }
    }
        alert("GAME OVER");
        return;

}

guessLetter();
