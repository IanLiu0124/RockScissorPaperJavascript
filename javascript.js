
let playerHand = (choice) =>
    {
        if(choice == 1)
        {
            return "Rock";
        }
        else if(choice == 2)
        {
            return "Scissor"
        }
        else if(choice ==3)
        {
            return "Paper"
        }
        else
        {
            return "Stop"
        }
        
    };

const compChoice = () =>{
        let ranChoice = Math.floor(Math.random() * 3);
        let compDecision;
        console.log(ranChoice);
        switch(ranChoice)
        {
            case 0:
                compDecision = "Rock"
                break;
            case 1:
                compDecision = "Scissor"
                break;
            case 2:
                compDecision = "Paper"
                break;
            default:
                break;
        }
        console.log(compDecision);
        return compDecision;
    }

let playerscore = 0;
let computerscore = 0;
let result = document.getElementById("result")
let playerscoreresult = document.getElementById("playerscore")
let computerscoreresult = document.getElementById("computerscore")
let button = document.getElementById("play")

// console.log(playerchoice);
const playGame = () =>
{
    let playerchoice = playerHand(parseInt(prompt("Please enter your choice 1. Rock 2. Scissor  3. Paper 4. Quit")))
    let compDecision = compChoice();
    if(playerchoice =="Stop")
    {
        result.innerHTML = "Game Stopped!"
    }
    else if(playerchoice == compDecision)
        {
            result.innerHTML = `Both player used ${compDecision}!<br>It's a Draw`
        }
        else if(playerchoice == "Rock" && compDecision == "Scissor" || playerchoice == "Scissor" && compDecision == "Paper" || playerchoice == "Paper" && compDecision == "Rock")
        {
            result.innerHTML = `Player Wins!<br>You used ${playerchoice} and the computer had ${compDecision}`
            playerscore++
        }
        else
        {
            result.innerHTML = `Player Lose!<br>The computer had ${compDecision} and you had ${playerchoice}`
            computerscore++
        }

    playerscoreresult.innerHTML = `Player Score: ${playerscore}`
    computerscoreresult.innerHTML = `Computer Score: ${computerscore}`
}

button.addEventListener('click', playGame);

