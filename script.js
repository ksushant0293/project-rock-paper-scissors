function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
}


function singleRound(playerSelection, computerSelection) {
    let winMessage = `you win! ${playerSelection} beats ${computerSelection}`;
    let loseMessage = `you lose! ${computerSelection} beats ${playerSelection}`;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return {
                message: winMessage,
                winner: 1
            };
        } else if (computerSelection == "paper") {
            return {
                message: loseMessage,
                winner: 0
            }
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return {
                message: winMessage,
                winner: 1
            };
        } else if (computerSelection == "rock") {
            return {
                message: loseMessage,
                winner: 0
            }
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return {
                message: loseMessage,
                winner: 0
            };
        } else if (computerSelection == "rock") {
            return {
                message: winMessage,
                winner: 1
            };
        }
    }

    return {
        message: "draw",
        winner: -1
    }

}

function game() {
    let playerSelection = prompt("input from user");
    let computerSelection = getComputerChoice();
    let result = singleRound(playerSelection, computerSelection);
    let playerScore = 0;
    let computerScore = 0;
    if(result.winner == 1){
        playerScore += 1
    } else if(result.winner == 0){
        computerScore += 1;
    }
    console.log(result, "sushant");
    console.log(computerSelection);

    playerSelection = prompt("input from user");
    computerSelection = getComputerChoice();
    result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection);
    if(result.winner == 1){
        playerScore += 1
    } else if(result.winner == 0){
        computerScore += 1;
    }

    playerSelection = prompt("input from user");
    computerSelection = getComputerChoice();
    result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection);
    if(result.winner == 1){
        playerScore += 1
    } else if(result.winner == 0){
        computerScore += 1;
    }
    playerSelection = prompt("input from user");
    computerSelection = getComputerChoice();
    result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection);
    if(result.winner == 1){
        playerScore += 1
    } else if(result.winner == 0){
        computerScore += 1;
    }
    playerSelection = prompt("input from user");
    computerSelection = getComputerChoice();
    result = singleRound(playerSelection, computerSelection);
    console.log(result, "sushant");
    console.log(computerSelection);
    if(result.winner == 1){
        playerScore += 1
    } else if(result.winner == 0){
        computerScore += 1;
    }
    if(computerScore > playerScore){
        return "You win";
    } else if(playerScore > computerScore){
        return "You lose";
    } else {
        return "draw";
    }
   
}
console.log(game());
