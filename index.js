let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const btn = document.querySelector(".btn");
const userScoreCard = document.querySelector("#user-score");
const compScoreCard = document.querySelector("#comp-score");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
 // console.log("Game was draw");
  btn.innerText = " Game was draw!!";
  btn.style.backgroundColor = "rgb(1, 1, 34)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScoreCard.innerText = userScore;
   // console.log("you win");
    btn.innerText = ` You Win !! Your ${userChoice} beats ${compChoice}`;
    btn.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreCard.innerText = compScore;
   // console.log("you lose");
    btn.innerText = ` You lose !! Your ${userChoice} beats ${compChoice}`;
    btn.style.backgroundColor = "brown";
  }
};

const playGame = (userChoice) => {
  //console.log(`user choose ${userChoice} `);
  //Generate computer choice
  const compChoice = gencompChoice();
 // console.log(`comp choose ${compChoice} `);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //comp choice :paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //paper rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userChoice);
  });
});
