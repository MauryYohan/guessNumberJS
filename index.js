import { prompt } from './prompt.js';

// 🦁 Guess the number™
const min = 0;
const max = 100;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction qui demande la saisie d'un nombre à l'utilisateur
const guessNumberToUser = () => {
    let userNumber = Number(prompt("Enter a number : "));
    while (userNumber < 0 || userNumber > 100 || isNaN(userNumber)) {
        console.log("You have to enter a valid number between 0 and 100");
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
            console.log("It's higher !");
        } else if (userNumber > targetNumber) {
            console.log("It's small !");
        } else {
            console.log(`Well done, you have find the mystery number in ${attempts} attempt(s)`);
            console.log("\n");
            endGame();
        }
    }
}

main();
