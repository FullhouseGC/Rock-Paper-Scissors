// This function will choose a random item from the array computerChoice 
function computerRandom(){
    const computerChoice = ["PIEDRA", "PAPEL", "TIJERA"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}

let computerScore = 0;
let playerScore = 0;
//Comparing player choice with random computer choice and see who won (or tied)
function totalChoice(playerChoice, computerChoice) {
    switch (true) {
      case playerChoice === "PIEDRA" && computerChoice === "PIEDRA":
        return "Ordenador eligió piedra, es empate!";
      case playerChoice === "PIEDRA" && computerChoice === "PAPEL":
        computerScore++;
        return "Ordenador eligió papel, has perdido!";
      case playerChoice === "PIEDRA" && computerChoice === "TIJERA":
        playerScore++;
        return "Ordenador eligió tijera, has ganado!";
      case playerChoice === "PAPEL" && computerChoice === "PIEDRA":
        playerScore++;
        return "Ordenador eligió piedra, has ganado!";
      case playerChoice === "PAPEL" && computerChoice === "PAPEL":
        return "Ordenador eligió papel, es empate!";
      case playerChoice === "PAPEL" && computerChoice === "TIJERA":
        computerScore++;
        return "Ordenador eligió tijera, has perdido!";
      case playerChoice === "TIJERA" && computerChoice === "PIEDRA":
        computerScore++;
        return "Ordenador eligió piedra, has perdido!";
      case playerChoice === "TIJERA" && computerChoice === "PAPEL":
        playerScore++;
        return "Ordenador eligió papel, has ganado!";
      case playerChoice === "TIJERA" && computerChoice === "TIJERA":
        return "Ordenador eligió tijera, es empate!";
    }
  }

//This is the game function
let prom = null;
function game(){
  if(computerScore < 5 && playerScore < 5){
        let computerAnswer = computerRandom();
        const announcement = document.querySelector("#announcement");
        announcement.textContent = totalChoice(prom, computerAnswer);
        const computerDisplay = document.getElementById("computerDisplay");
        computerDisplay.textContent = "Computer score" + " " + computerScore;
        const playerDisplay = document.getElementById("playerDisplay");
        playerDisplay.textContent = "Player score" + " " + playerScore;
        winner();
      } else{
        return;
      }
  }
function winner(){
    let winner = document.querySelector("#winner");
    if(playerScore >= 5){
       winner.textContent = "Player won!";
    } else if(computerScore >= 5){
        winner.textContent = "Computer won!"
    }
}
//UI
const buttons = document.querySelectorAll(".game-button");
buttons.forEach(button =>{
    button.addEventListener('click', () => { 
        prom = button.dataset.choice;
        game();
    })
})








/*const rock = document.querySelector("#rockButton");
rock.addEventListener('click', () => {
    prom = "PIEDRA";
    game();
});

const paper = document.querySelector("#paperButton");
paper.addEventListener('click', () => {
    prom = "PAPEL";
    game();
})

const scissor = document.querySelector('#scissorsButton');
scissor.addEventListener('click', () => {
    prom = "TIJERA";
    game();
})*/