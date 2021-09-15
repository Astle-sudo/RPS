let turns = 0;
let playerscore = 0;
let computerscore = 0;
let computer;
const rocks = document.querySelector("#rock");
const papers = document.querySelector("#paper");
const sciccors = document.querySelector("#sciccors");
const start = document.querySelector("#start");

function check() {
  if (turns == 4) {
    alert("Click Ounce More");
  }
  if (turns == 5) {
    if (playerscore > computerscore) {
      document.getElementById("you-text").innerHTML = "You WON!";
      document.getElementById("computer").innerHTML = "Computer LOST!"
      document.getElementById("score").innerHTML = "Your score:" + playerscore;
      document.getElementById("Cscore").innerHTML = "Computer score:" + computerscore;
    }
    else if (playerscore < computerscore) {
      document.getElementById("you-text").innerHTML = "You LOST!";
      document.getElementById("computer").innerHTML = "Computer WON!"
      document.getElementById("score").innerHTML = "Your score:" + playerscore;
      document.getElementById("Cscore").innerHTML = "Computer score:" + computerscore;
    }
    else {
      document.getElementById("you-text").innerHTML = "DRAW!";
      document.getElementById("computer").innerHTML = "DDRRAAWW!!";
      document.getElementById("score").innerHTML = "Your score:" + playerscore;
      document.getElementById("Cscore").innerHTML = "Computer score:" + computerscore;
    }
    document.getElementById("scene-2").style.display = "none";
    document.getElementById("scene-3").style.display = "block";
  }
}

function reset () {
  rocks.innerHTML = "R";
  rocks.style.color = "#000000";
  rocks.style.backgroundColor = "#FAD02C";
  rocks.style.fontSize = "100px";
  rocks.classList.add("hover-effect");
  
  papers.innerHTML = "P";
  papers.style.color = "#000000";
  papers.style.backgroundColor = "#FAD02C";
  papers.style.fontSize = "100px";
  papers.classList.add("hover-effect");
  
  sciccors.innerHTML = "S";
  sciccors.style.color = "#000000";
  sciccors.style.backgroundColor = "#FAD02C";
  sciccors.style.fontSize = "100px";
  sciccors.classList.add("hover-effect");
}

function RockClick () {
  check();
  document.getElementById("rock").innerHTML = "You Chose ROCK!";
  document.getElementById("rock").style.fontSize = "15px";
  document.getElementById("rock").style.backgroundColor = "#000000";
  computer = Math.floor(Math.random() * 3);
  
  if (computer == 0) {
    document.getElementById("rock").innerHTML = "You and Computer Chose ROCK!";
  }
  else if (computer == 1) {
    document.getElementById("paper").innerHTML = "Computer Chose PAPER!";
    document.getElementById("paper").style.color = "#FAD02C";
    document.getElementById("paper").style.fontSize = "15px";
    document.getElementById("paper").style.backgroundColor = "#000000";
    computerscore += 1;
  }
  else if (computer == 2) {
    document.getElementById("sciccors").innerHTML = "Computer Chose SCICCORS!";
    document.getElementById("sciccors").style.color = "#FAD02C";
    document.getElementById("sciccors").style.fontSize = "15px";
    document.getElementById("sciccors").style.backgroundColor = "#000000";
    playerscore += 1;
  }
  setTimeout(reset,1000);
  turns += 1;
}

function PaperClick () {
  check();
  document.getElementById("paper").innerHTML = "You Chose PAPER!";
  document.getElementById("paper").style.fontSize = "15px";
  document.getElementById("paper").style.backgroundColor = "#000000";
  computer = Math.floor(Math.random() * 3);
  
  if (computer == 1) {
    document.getElementById("paper").innerHTML = "You and Computer Chose PAPER!";
  }
  else if (computer == 0) {
    document.getElementById("rock").innerHTML = "Computer Chose ROCK!";
    document.getElementById("rock").style.color = "#FAD02C";
    document.getElementById("rock").style.fontSize = "15px";
    document.getElementById("rock").style.backgroundColor = "#000000";
    computerscore += 1;
  }
  else if (computer == 2) {
    document.getElementById("sciccors").innerHTML = "Computer Chose SCICCORS!";
    document.getElementById("sciccors").style.color = "#FAD02C";
    document.getElementById("sciccors").style.fontSize = "15px";
    document.getElementById("sciccors").style.backgroundColor = "#000000";
    playerscore += 1;
  }
  setTimeout(reset,1000);
  turns += 1;
}

function SciccorsClick () {
  check();
  document.getElementById("sciccors").innerHTML = "You Chose SCICCORS!";
  document.getElementById("sciccors").style.fontSize = "15px";
  document.getElementById("sciccors").style.backgroundColor = "#000000";
  computer = Math.floor(Math.random() * 3);
  
  if (computer == 2) {
    document.getElementById("sciccors").innerHTML = "You and Computer Chose SCICCORS!";
  }
  else if (computer == 0) {
    document.getElementById("rock").innerHTML = "Computer Chose ROCK!";
    document.getElementById("rock").style.color = "#FAD02C";
    document.getElementById("rock").style.fontSize = "15px";
    document.getElementById("rock").style.backgroundColor = "#000000";
    computerscore += 1;
  }
  else if (computer == 1) {
    document.getElementById("paper").innerHTML = "Computer Chose PAPER!";
    document.getElementById("paper").style.color = "#FAD02C";
    document.getElementById("paper").style.fontSize = "15px";
    document.getElementById("paper").style.backgroundColor = "#000000";
    playerscore += 1;
  }
  setTimeout(reset,1000);
  turns += 1;
}

function Gamestart() {
  document.getElementById("scene-1").style.display = "none";
  document.getElementById("scene-2").style.display = "flex";
}

start.addEventListener("click",Gamestart);
rocks.addEventListener("click",RockClick);
paper.addEventListener("click",PaperClick);
sciccors.addEventListener("click",SciccorsClick);

