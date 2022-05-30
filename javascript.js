let computerChoice = ["Piedra", "Papel", "Tijera"];
function computerRandom(){
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}
console.log(computerRandom())
