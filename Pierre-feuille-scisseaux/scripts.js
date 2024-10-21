//creer un jeu pierre feuille ciseaux
// pour cela je dois faire un prompt pour demander a l'utilisateur de choisir entre pierre feuille ou ciseaux
// je dois ensuite faire un random pour que l'ordinateur choisisse entre pierre feuille ou ciseaux
// je dois ensuite comparer les deux choix et determiner qui a gagné
// je dois ensuite afficher le resultat
//  la partie se fait en 5 rounds
// je dois aussi afficher le score
// je dois a la fin des 5 rounds afficher le gagnant

// probleme : je ne sais pas comment faire pour creer les fonctions pour permettre a la machine de choisir entre pierre feuille et cissaux 
// je n ai aucune idee de comment faire pour faire le score et comment dans la console pour stocker le score etc

// pour commencer je vais creer la partie reserver a l ordinateur pour comprendre comment ca marche.
// dans ma fonction getComputerChoice dois il y avaoir un paramater ou pas ?

//quands je resoue un probleme je dois penser a ce que j ai appris. 
// ici il est fort probable que le resultat de math.random doivent etre utiliser dans une fonction if else pour extraire le resultat et lui attribuer une value


// const computerChoice = getComputerChoice("pierre", "feuille", "ciseaux");

let computerChoice = getComputerChoice();

function getComputerChoice () {
    let resultMathRandom = Math.random();
    if (resultMathRandom <= 0.33) {
        resultMathRandom = "pierre";
    } else if (resultMathRandom <= 0.66) {
        resultMathRandom = "feuille";
    } else if ( resultMathRandom <= 1) {
        resultMathRandom = "ciseaux";
    }
    return resultMathRandom;
}

console.log(computerChoice);

