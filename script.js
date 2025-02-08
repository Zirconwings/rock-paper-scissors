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
function getHumanChoice(){
    let x = 0;
    while(x !== 1 && x !== 2 && x !== 3){
        x = parseInt(prompt("Welcome to Rock, Paper, Scissors against a computer.\n Choose 1 for Rock, 2 for Paper, or 3 for Scissors!"));
    }
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
                console.log(`Tie! You both chose ${humanChoice}`);
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
            console.log(`Congradulations! You won since ${humanChoice} beats ${computerChoice}.`);
            ++humanScore;
        }
        if (won === 2){
            console.log(`Oh No! The computer won since ${computerChoice} beats ${humanChoice}.`);
            ++computerScore;
        }
    }
    let [humanScore,computerScore] = [0,0];
    for (let i=0; i<5; ++i){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore>computerScore){
        console.log("Congradulations! You won the game!");
    }
    else if (computerScore>humanScore){
        console.log("The computer won the game!")
    }
    else{
        console.log("It seems you and the computer tied.");
    }
}
playGame();
