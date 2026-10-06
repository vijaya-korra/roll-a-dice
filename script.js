
const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

let yourScore = 0;
let myScore = 0;

const rollButton = document.getElementById("rollButton");
const resetButton = document.getElementById("resetButton");

rollButton.addEventListener("click", function () {

    // Generate random numbers from 1 to 6
    const yourRoll = Math.floor(Math.random() * 6) + 1;
    const myRoll = Math.floor(Math.random() * 6) + 1;

    // Show dice
    document.getElementById("yourDice").textContent =
        dice[yourRoll - 1];

    document.getElementById("myDice").textContent =
        dice[myRoll - 1];

    // Add scores
    yourScore += yourRoll;
    myScore += myRoll;

    // Display scores
    document.getElementById("yourScore").textContent =
        yourScore;

    document.getElementById("myScore").textContent =
        myScore;

    // Display winner of round
    if (yourRoll > myRoll) {
        document.getElementById("message").textContent =
            "🔥 You win this round!";
    }
    else if (myRoll > yourRoll) {
        document.getElementById("message").textContent =
            "🤖 I win this round!";
    }
    else {
        document.getElementById("message").textContent =
            "🤝 Draw!";
    }
});

resetButton.addEventListener("click", function () {

    yourScore = 0;
    myScore = 0;

    document.getElementById("yourDice").textContent = "⚀";
    document.getElementById("myDice").textContent = "⚀";

    document.getElementById("yourScore").textContent = "0";
    document.getElementById("myScore").textContent = "0";

    document.getElementById("message").textContent =
        "Roll the dice!";
});

