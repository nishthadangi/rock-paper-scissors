let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was draw! Play again.";
    msg.style.backgroundColor = "#450920" ; 
    msg.style.color = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#f9dbbd";
        msg.style.color = "#450920";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor = "#da627d" ;
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } 
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // compChoice = paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // compChoice = rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
             // compChoice = rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
       playGame(userChoice);
    });
});