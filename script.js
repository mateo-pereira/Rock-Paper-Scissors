function rockPaperScissors()
{
        function getComputerChoice()
    {
        let num = Math.random();
        if (num < 0.333) return "0"; //rock
        if (0.333 < num && num < 0.666) return "1"; //paper
        if (num > 0.666) return "2"; //scissors
    }

    function getPlayerChoice(message)
    {
        var lowercase = message.toLowerCase();
        if (lowercase === "rock") {
            change = "0";
            return "0";
        }
        else if (lowercase === "paper") {
            change = "1";
            return "1";
        }
        else if (lowercase === "scissors"){ 
            change = "2";
            return "2";
        }
        else {
            message = "This is not a valid answer, please try again";
            yesNo = 1;
            getPlayerChoice(prompt(message));
        }
    }

    function playRound(playerSelection,computerSelection)
    {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice(prompt("Let's play Rock Paper Scissors! Please choose either Rock, Paper or Scissors:"));
        if (yesNo === 1) playerSelection = change;

        if (playerSelection === "0" && computerSelection === "0") {
            console.log("Tie. You: Rock | Computer: Rock.");
        }
        else if (playerSelection === "0" && computerSelection === "1") {
            computerWins++;
            console.log("Loss. You: Rock | Computer: Paper.");
        }
        else if (playerSelection === "0" && computerSelection === "2") {
            playerWins++;
            console.log("Win! You: Rock | Computer: Scissors.");
        }
        else if (playerSelection === "1" && computerSelection === "0") {
            playerWins++;
            console.log("Win!. You: Paper | Computer: Rock.");
        }
        else if (playerSelection === "1" && computerSelection === "1") {
            console.log("Tie. You: Paper | Computer: Paper.");
        }
        else if (playerSelection === "1" && computerSelection === "2") {
            computerWins++;
            console.log("Loss. You: Paper | Computer: Scissors.");
        }
        else if (playerSelection === "2" && computerSelection === "0") {
            computerWins++;
            console.log("Loss. You: Scissors | Computer: Rock.");
        }
        else if (playerSelection === "2" && computerSelection === "1") {
            playerWins++;
            console.log("Win!. You: Scissors | Computer: Paper.");
        }
        else if (playerSelection === "2" && computerSelection === "2") {
            console.log("Tie. You: Scissors | Computer: Scissors.");
        }
    }

    function fullGame()
    {
        for (var i = 0; i < 5;i++) 
        {
            playRound();
        }

        if (playerWins > computerWins)
            console.log("Congradulations! You won the series. " + playerWins + " - " + computerWins);

        else if(playerWins < computerWins)
            console.log("Better luck next time! You lost the series. " + playerWins + " - " + computerWins)

        else
            console.log("So close! You tied the series. " + playerWins + " - " + computerWins);


        var playAgain = prompt("Would you like to play again?").toLowerCase();
        if (playAgain === "yes") 
        {
            playerWins = 0;
            computerWins = 0;
            console.log("-----------------------------------");
            fullGame();
        }
        
    }

    var playerWins = 0;
    var computerWins = 0;
    var yesNo = 0
    var change = 0 //Exists because the user has typed in a wrong word
    fullGame();

    console.log("-----------------------------------");
    console.log("Thanks for Playing!");
}

