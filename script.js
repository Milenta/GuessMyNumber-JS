let seacretNum = 0;
let inputNum;
let score = 20;
let highScore = 0;

function setNumber() {
  seacretNum = Number(Math.floor(Math.random() * 20 + 1));
  console.log("in function" + seacretNum);
}

function displayText(id, message) {
  document.getElementById(id).innerText = message; //`You lost! Play again?`;
}

setNumber();

function compare() {
  if (!inputNum) {
    displayText("answer", `You should input a number`);
  } else if (inputNum !== seacretNum) {
    if (score > 1) {
      displayText(
        "answer",
        inputNum > seacretNum
          ? `Your guess ${inputNum} is too high, my number is smaller`
          : `Your guess ${inputNum} is too low, my number is bigger`
      );
      score--;
      displayText("score", score);
      displayText("message", `Keep guessing...`);
    } else {
      score--;
      displayText("score", score);
      // set html text
      displayText("message", `You lost! Play again?`);
      // set css style
      document.getElementById("main").style.backgroundColor = "red";
    }
  } else if (inputNum === seacretNum) {
    // set html text
    displayText(
      "answer",
      `Your guess ${inputNum} is spot on, my number is also ${seacretNum}`
    );
    displayText("message", "Play again?");
    // set css style
    document.getElementById("main").style.backgroundColor = "rgb(0, 255, 13)";
    if (highScore < score) {
      highScore = score;
      displayText("highscore", highScore);
    }
  }
}
document.getElementById("check").addEventListener("click", function () {
  inputNum = Number(document.getElementById("num").value);
  compare();
});
document.getElementById("reset").addEventListener("click", function () {
  setNumber();
  score = 20;
  displayText("answer", `Your best guess:`);
  document.getElementById("main").style.backgroundColor = "blue";
  document.getElementById("num").value = null;
  displayText("score", score);
  displayText("message", `Start guessing...`);
});
