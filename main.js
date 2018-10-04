let mot = ["B", "O", "N", "J", "O", "U", "R"];
let vide = ["", "", "", "", "", "", ""];
let lettre = prompt("Choisissez une lettre");
// let confirm = confirm("voulez-vous rejouer?");


function guessLetter() {

    let lettre = prompt("Choisissez une lettre");

    for (i = 0; i < mot.length; i++) {

        if (lettre == mot[i]) {

            // ne pas utiliser push mais comparaison:
            vide[i] = mot[i];
            alert("la lettre est bonne!");
            // appeler la fonction dans la fonction pour recommencer
            guessLetter();
        }

        else {

            alert("mauvaise lettre!");
        }



    }
}

console.log(vide);
guessLetter();