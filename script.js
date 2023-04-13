function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    console.log(idx, arr[idx]);
    return arr[idx];
}


function singleRound(playerSelection, computerSelection) {
    let winMessage = `you win! ${playerSelection} beats ${computerSelection}`;
    let loseMessage = `you lose! ${computerSelection} beats ${playerSelection}`;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log(1);
            return winMessage;
        } else if (computerSelection == "paper") {
            console.log(2);

            return loseMessage
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return winMessage;
        } else if (computerSelection == "rock") {
            return loseMessage
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return loseMessage;
        } else if (computerSelection == "rock") {
            return winMessage
        }
    }

    return "draw"

}


function game() {
    let playerSelection = prompt("input from user");
    let computerSelection = getComputerChoice();
    let result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection, "meow");

     playerSelection = prompt("input from user");
     computerSelection = getComputerChoice();
     result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection, "meow");

    playerSelection = prompt("input from user");
    computerSelection = getComputerChoice();
    result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection, "meow");

     playerSelection = prompt("input from user");
     computerSelection = getComputerChoice();
     result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection, "meow");

     playerSelection = prompt("input from user");
     computerSelection = getComputerChoice();
    result = singleRound(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection, "meow");

    return result
}

console.log(game());