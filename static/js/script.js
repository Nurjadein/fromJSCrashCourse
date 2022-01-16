// Project 1: Your Age in days

function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var result = (2022 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + result + " days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  console.log(h1);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Project 2: Image Generator

function generateImage() {
  var image = document.createElement("img");
  var div = document.getElementById("imageID");
  image.src = "static/img/Pinwheel.gif";
  div.append(image);
}

// Project 3: Rock, Paper, Scissors

function rpsGame(choice) {
  var botChoice;
  botChoice = numberToChoice(randToRpsInt());
  console.log("Computer choice: ", botChoice);
  result = decideWinner(choice.id, botChoice);
  console.log(result);
  message = finalMessage(result);
  console.log(message);
  rpsFrontEnd(choice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][botChoice];
  var botScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, botScore];
}

function finalMessage([yourScore]) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore == 0.5) {
    return { message: "You Tied!", color: "orange" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(yourImagechoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var yourDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  yourDiv.innerHTML =
    "<img src='" +
    imageDatabase[yourImagechoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)' />";
  botDiv.innerHTML =
    "<img src='" +
    imageDatabase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)' />";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    ";font-size:60px;padding:30px;'>" +
    finalMessage["message"] +
    "</h1>";

  document.getElementById("flex-box-rps-div").appendChild(yourDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

// Project 4: Change the color of all Buttons

let allButtons = document.getElementsByTagName("button"); //returns an array
let copyAllButtons = [];

for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);// will push the second class of the button
}

function buttonColorChange(buttonThingy) {
  if(buttonThingy.value === 'red')
    buttonRed();
  else if (buttonThingy.value === 'green')
    buttonGreen();
  else if(buttonThingy.value === 'reset')
    buttonColorReset();
  else if (buttonThingy.value === 'random')
    randomColor();
  else
    return;
}

function buttonRed(){

 for (let i = 0; i < allButtons.length; i++) {
   allButtons[i].classList.replace(allButtons[i].classList[1],'btn-danger')
 }

}

function buttonGreen(){

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.replace(allButtons[i].classList[1],'btn-success')
  }
 
 }

 function buttonColorReset(){

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.replace(allButtons[i].classList[1],copyAllButtons[i]);
  }
 
 }

 function randomColor(){

  for (let i = 0; i < allButtons.length; i++) {
    let randomNum = Math.floor(Math.random() * copyAllButtons.length);
    allButtons[i].classList.replace(allButtons[i].classList[1],copyAllButtons[randomNum]);
  }
 
 }
