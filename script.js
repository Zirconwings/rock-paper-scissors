function getComputerChoice(){
    let x = Math.floor(Math.random()*3)+1;
    let choice = null;
    switch (x){
        case (1):
            choice = "Rock";
            break;
        case (2):
            choice = "Paper";
            break;
        case (3):
            choice = "Scissors";
    }
    return choice;
}
function playGame(){
    function playRound(humanChoice,computerChoice){
        let won = null;
        switch (true){
            case (humanChoice === null):
                console.log("Error with Human choice");
                break;
            case (computerChoice === null):
                console.log("Error with Computer choice");
                break;
            case (humanChoice === computerChoice):
                round.textContent = `Tie! You both chose ${humanChoice}`;
                break;
            case (humanChoice === "Rock" && computerChoice === "Scissors"):
                won = 1;
                break;
            case (humanChoice === "Paper" && computerChoice === "Rock"):
                won = 1;
                break;
            case (humanChoice === "Scissors" && computerChoice === "Paper"):
                won = 1;
                break;
            default:
                won = 2;
        }
        if (won === 1){
            round.textContent = `Round: Congradulations! You won since ${humanChoice} beats ${computerChoice}.`;
            ++humanScore;
            human.textContent = `Human Score: ${humanScore}`;
        }
        if (won === 2){
            round.textContent = `Round: Oh No! The computer won since ${computerChoice} beats ${humanChoice}.`;
            ++computerScore;
            computer.textContent = `Computer Score: ${computerScore}`;
        }
        if (humanScore === 5){
            result.textContent = "Winner: Human";
        }
        else if (computerScore === 5){
            result.textContent = "Winner: Computer";
        }
    }
    let [humanScore,computerScore] = [0,0];
    const round = document.querySelector("#round");
    const btns = document.querySelectorAll("button");
    const result = document.querySelector("#result");
    const computer = document.querySelector("#computer-score");
    const human = document.querySelector("#human-score");
    btns.forEach((btn)=>{btn.addEventListener("click", () => {playRound(btn.id,getComputerChoice())})});
}

playGame();
