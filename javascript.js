
// Array where the choices are stored for computer
let computerChoice = ["Piedra", "Papel", "Tijera"];

// This function will choose a random item from the array computerChoice 
function computerRandom(){
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}
let computerAnswer = computerRandom();

// Promt asking for players choice
let playerPrompt = prompt("Piedra, Papel o Tijera?");

// Converting the answer in all caps so they can write it case insensitive
let playerChoice = playerPrompt.toUpperCase();

//Comparing player choice with random computer choice and see who won (or tied)
function totalChoice (playerChoice, computerAnswer){
switch(true) {
    case (playerChoice === "PIEDRA" && computerAnswer === "Piedra"):
        return "Ordenador elijio piedra, es empate!";
    case (playerChoice === "PIEDRA" && computerAnswer === "Papel"):
        return "Ordenador elijio papel, has perdido!";
    case (playerChoice === "PIEDRA" && computerAnswer === "Tijera"):
        return "Ordenador elijio tijera, has ganado!";
    case (playerChoice === "PAPEL" && computerAnswer === "Piedra"):
        return "Ordenador elijio piedra, has ganado!";
    case (playerChoice === "PAPEL" && computerAnswer === "Papel"):
        return "Ordenador elijio papel, es empate!";
    case (playerChoice === "PAPEL" && computerAnswer === "Tijera"):
        return "Ordenador elijio tijera, has perdido!";
    case (playerChoice === "TIJERA" && computerAnswer === "Piedra"):
        return "Ordenador elijio piedra, has perdido!";
    case (playerChoice === "TIJERA" && computerAnswer === "Papel"):
        return "Ordenador elijio papel, has ganado!";
    case (playerChoice === "TIJERA" && computerAnswer === "Tijera"):
        return "Ordenador elijio tijera, es empate!";
} }
// This is the message players recieve
console.log(totalChoice(playerChoice, computerAnswer));