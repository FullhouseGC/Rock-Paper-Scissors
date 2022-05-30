// Array where the choices are stored for computer
let computerChoice = ["Piedra", "Papel", "Tijera"];

// This function will choose a random item from the array computerChoice 
function computerRandom(){
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}
console.log(computerRandom())

// Promt asking for players choice
let playerPrompt = prompt("Piedra, Papel o Tijera?");

// Converting the answer in all caps so they can write it case insensitive
let playerChoice = playerPrompt.toUpperCase();
