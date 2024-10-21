//creer un jeu pierre feuille ciseaux
// pour cela je dois faire un prompt pour demander a l'utilisateur de choisir entre pierre feuille ou ciseaux
// je dois ensuite faire un random pour que l'ordinateur choisisse entre pierre feuille ou ciseaux
// je dois ensuite comparer les deux choix et determiner qui a gagné
// je dois ensuite afficher le resultat
//  la partie se fait en 5 rounds
// je dois aussi afficher le score
// je dois a la fin des 5 rounds afficher le gagnant

// variables

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

let computerScore = 0;
let humanScore = 0;

//function

function getComputerChoice () {
let resultMathRandom = Math.random();
if (resultMathRandom <= 0.33) {
    resultMathRandom = "石";
} else if (resultMathRandom <= 0.66) {
    resultMathRandom = "紙";
} else if ( resultMathRandom <= 1) {
    resultMathRandom = "鋏";
}
return resultMathRandom;
}

function getHumanChoice () {
let humanChoice = prompt("石、紙、鋏を選んでください");
return humanChoice;
}

function UpdateScore (resultat) {
    if (resultat === "あなたの勝ち") {
        humanScore++;
    } else if (resultat === "あなたの負け") {
        computerScore++;
    }
}



function playRound (humanChoice, computerChoice) {
    let a = humanChoice;
    let b = computerChoice;

    if (a === b) {
        return "引き分け";
    } else if (a === "石" && b === "紙" || a === "紙" && b === "鋏" || a === "鋏" && b === "石") {
        return "あなたの負け";
    } else { return "あなたの勝ち";
    }
}

playRound(humanChoice, computerChoice);

function fullGame (score) {
    if (score === 5) {
        if (humanScore > computerScore) {
            return "You won the game!";
        } else if (humanScore < computerScore) {
            return "You lost the game!";
        }
    }
}

