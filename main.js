let mot = ["B", "O", "N", "J", "O", "U", "R"];

let lettreTrouvee = [];

let lettre;         // lettre entrée par l'utilisateur.
let essaiNul = 0;   // nombre d'essais ratés (max 6)
let essaiBon = 0;   // nombre d'essais corrects
let wordFound = false;

function guessLetter() {
    
    while (mot.toString() !== lettreTrouvee.toString()) {
        while (essaiNul <= 6 && wordFound == false) {
            lettre = prompt("Choisissez une lettre").toUpperCase();
            let inWord = false;

            for (i = 0; i < mot.length; i++) {

                if (lettre == mot[i]) {
                    lettreTrouvee[i] = lettre;
                    inWord = true;
                    essaiBon++;
                    console.log(lettreTrouvee);
                    if (mot.toString() == lettreTrouvee.toString()) {
                        wordFound = true;
                        alert("well done! vous avez réussi en " + (essaiNul + essaiBon) + " essais");
                        return;
                    };
                }
            }

            if (inWord == false) {
                essaiNul++;
                alert("La lettre " + lettre + " n'est pas dans ce mot");
            } else {
                alert("la lettre est bonne!\n" +
                     lettreTrouvee);
            }
        }
        alert("GAME OVER");
    }
}

guessLetter();
