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
let answer;
switch(true) {
    case (playerChoice === "PIEDRA" && computerAnswer === "Piedra"):
        answer = "Ordenador elijio piedra, es empate!";
        break;
    case (playerChoice === "PIEDRA" && computerAnswer === "Papel"):
        answer = "Ordenador elijio papel, has perdido!";
        break;
    case (playerChoice === "PIEDRA" && computerAnswer === "Tijera"):
        answer = "Ordenador elijio tijera, has ganado!";
        break;
    case (playerChoice === "PAPEL" && computerAnswer === "Piedra"):
        answer = "Ordenador elijio piedra, has ganado!";
        break;
    case (playerChoice === "PAPEL" && computerAnswer === "Papel"):
        answer = "Ordenador elijio papel, es empate!";
        break;
    case (playerChoice === "PAPEL" && computerAnswer === "Tijera"):
        answer = "Ordenador elijio tijera, has perdido!";
        break;
    case (playerChoice === "TIJERA" && computerAnswer === "Piedra"):
        answer = "Ordenador elijio piedra, has perdido!";
        break;
    case (playerChoice === "TIJERA" && computerAnswer === "Papel"):
        answer = "Ordenador elijio papel, has ganado!";
        break;
    case (playerChoice === "TIJERA" && computerAnswer === "Tijera"):
        answer = "Ordenador elijio tijera, es empate!";
        break;
}

// This is the message players recieve
console.log(alert(answer));
console.log(answer);