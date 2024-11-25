import { prompt } from './prompt.js';

// 🦁 Guess the number
const targetNumber = Math.floor(Math.random() * 100);
let attempts = 0;
let userNumber;

// Fonction qui demande la saisie d'un nombre à l'utilisateur
function guessNumberToUser() {
    userNumber = prompt("Saisir un nombre : ");
    while (userNumber < 0 || userNumber > 100 || isNaN(userNumber)) {
        console.log("Merci d'entrer un nombre valide entre 0 and 100");
        userNumber = guessNumberToUser();
    }
    return userNumber;
}

// Fonction qui compare le nombre de l'utilisateur avec le nombre mystère
function checkTheNumber(userNumber, targetNumber) {
    if (userNumber < targetNumber) {
        console.log("C'est plus !");
    } else if (userNumber > targetNumber) {
        console.log("C'est moins !");
    } else {
        console.log(`Bravo, vous avez trouvé le nombre mystère en ${attempts} essai(s)`);
    }
}

// Coeur du programme, la boucle du jeu
while (userNumber !== targetNumber) {
    userNumber = guessNumberToUser();
    attempts++;
    checkTheNumber(userNumber, targetNumber);
}