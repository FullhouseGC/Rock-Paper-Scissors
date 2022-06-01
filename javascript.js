// This function will choose a random item from the array computerChoice 
function computerRandom(){
    const computerChoice = ["Piedra", "Papel", "Tijera"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}
//Comparing player choice with random computer choice and see who won (or tied)
function totalChoice (playerChoice, computerChoice){
switch(true) {
    case (playerChoice === "PIEDRA" && computerChoice === "Piedra"):
        return "Ordenador elijio piedra, es empate!";
    case (playerChoice === "PIEDRA" && computerChoice === "Papel"):
        computerScore++
        return "Ordenador elijio papel, has perdido!";
    case (playerChoice === "PIEDRA" && computerChoice === "Tijera"):
        playerScore++
        return "Ordenador elijio tijera, has ganado!";
    case (playerChoice === "PAPEL" && computerChoice === "Piedra"):
        playerScore++
        return "Ordenador elijio piedra, has ganado!";
    case (playerChoice === "PAPEL" && computerChoice === "Papel"):
        return "Ordenador elijio papel, es empate!";
    case (playerChoice === "PAPEL" && computerChoice === "Tijera"):
        computerScore++
        return "Ordenador elijio tijera, has perdido!";
    case (playerChoice === "TIJERA" && computerChoice === "Piedra"):
        computerScore++
        return "Ordenador elijio piedra, has perdido!";
    case (playerChoice === "TIJERA" && computerChoice === "Papel"):
        playerScore++
        return "Ordenador elijio papel, has ganado!";
    case (playerChoice === "TIJERA" && computerChoice === "Tijera"):
        return "Ordenador elijio tijera, es empate!";
} }
let computerScore = 0;
let playerScore = 0;
//This is the game function
function game(){
    for (let i = 0; i < 5; i++){
        let computerAnswer = computerRandom();
        let prom = prompt("Piedra, papel o tijera?");
        prom = prom.toUpperCase();
        console.log(totalChoice(prom, computerAnswer))
        console.log(playerScore + " " + computerScore)
    }
}
console.log(game());