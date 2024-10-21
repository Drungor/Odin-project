
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

function updateScore (resultat) {
    if (resultat === "あなたの勝ち") {
        humanScore++;
    } else if (resultat === "あなたの負け") {
        computerScore++;
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound (playerChoice, secondPlayerChoice) {
    let a = playerChoice;
    let b = secondPlayerChoice;

    if (a === b) {
        return "引き分け";
    } else if (a === "石" && b === "紙" || a === "紙" && b === "鋏" || a === "鋏" && b === "石") {
        return "あなたの負け";
    } else { return "あなたの勝ち";
    }
}

function playGame () {
    let round = 0;

    for (round = 0; round < 5; round++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        let resultat = playRound(humanChoice, computerChoice);
        updateScore(resultat);
    }
    
    if (humanScore > computerScore) {
        console.log("ゲーム終了！あなたの勝ちです！");
    } else if (computerScore > humanScore) {
        console.log("ゲーム終了！コンピュータの勝ちです！");
    } else {
        console.log("ゲーム終了！引き分けです！");
    }
}

playGame();
alert("ゲーム終了！お疲れ様でした！");