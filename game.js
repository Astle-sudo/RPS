const values = {
    0 : "Rock",
    1 : "Paper",
    2 : "Scissors"
};

let playerscore = computerscore = turns = 0;

while (turns < 5) {
    let player = prompt("Enter your Choice:");
    let computer = values[Math.floor(Math.random() * 3)];
    if (player == "Rock") {
        if (computer == "Paper") {
            console.log("You Lose!");
            computerscore += 1;
        }
        if (computer == "Scissors") {
            console.log("You Win!");
            playerscore += 1;
        }
        if (computer == player) {
            console.log("Draw!");
        }
    }
    if (player == "Paper") {
        if (computer == "Scissors") {
            console.log("You Lose!");
            computerscore += 1;
        }
        if (computer == "Rock") {
            console.log("You Win!");
            playerscore += 1;
        }
        if (computer == player) {
            console.log("Draw!");
        }
    }
    if (player == "Scissors") {
        if (computer == "Rock") {
            console.log("You Lose!");
            computerscore += 1;
        }
        if (computer == "Paper") {
            console.log("You Win!");
            playerscore += 1;
        }
        if (computer == player) {
            console.log("Draw!");
        }
    }
    turns += 1;
}

if (playerscore > computerscore) {
    console.log("You WIN the game");
}
if (playerscore < computerscore) {
    console.log("You LOSE the game");
}
if (playerscore == computerscore) {
    console.log("It's a DRAW");
}