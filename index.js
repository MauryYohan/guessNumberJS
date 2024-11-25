import { prompt } from './prompt.js';

// 🦁 Guess the number™
const min = 0;
const max = 100;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction qui demande la saisie d'un nombre à l'utilisateur
const guessNumberToUser = () => {
    let userNumber = prompt("Saisir un nombre : ");
    while (userNumber < 0 || userNumber > 100 || isNaN(userNumber) || userNumber === "") {
        console.log("Merci d'entrer un nombre valide entre 0 and 100");
        userNumber = guessNumberToUser();
    }
    return userNumber;
}

const playAgain = () => {
    const replay = prompt("Enter 'yes' to replay or 'no' to quit \n");
    if (replay.toLowerCase() === 'yes') {
        main();
    } else if (replay.toLowerCase() === 'no')  {
        console.log("Goodbye !");
        process.exit(0);
    } else {
        console.log("Please enter a valid answer");
        playAgain();
    }
}

function endGame() {
    console.log("Do you want to replay once ? ")
    playAgain();
}

// Coeur du programme, la boucle du jeu
function main() {
    const targetNumber = getRandomNumber(min, max);
    console.log("\n");
    let attempts = 0;
    let userNumber;

    while (userNumber !== targetNumber) {
        userNumber = guessNumberToUser();
        attempts++;
        if (userNumber < targetNumber) {
            console.log("C'est plus !");
        } else if (userNumber > targetNumber) {
            console.log("C'est moins !");
        } else {
            console.log(`Bravo, vous avez trouvé le nombre mystère en ${attempts} essai(s)`);
            console.log("\n");
            endGame();
        }
    }
}

main();
