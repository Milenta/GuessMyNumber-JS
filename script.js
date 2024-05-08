let seacretNum = 0;
let inputNum;
let score = 20;

function setNumber() {
  seacretNum = Number(Math.floor(Math.random() * 20 + 1));
}
setNumber();
function compare() {
  if (!inputNum) {
    document.getElementById("answer").innerText = `You should input a number`;
  } else if (inputNum < seacretNum) {
    if (score < 1) {
      // set html text
      document.querySelector(".message").innerText = `You lost! Play again?`;
      // set css style
      document.getElementById("main").style.backgroundColor = "red";
    } else {
      // set html text
      document.getElementById(
        "answer"
      ).innerText = `Your guess is ${inputNum}, that is too low, my number is bigger`;
      document.getElementById("try").innerText = `Try again`;
      score--;
      document.querySelector(".score").innerText = `${score}`;
    }
  } else if (inputNum > seacretNum) {
    if (score < 1) {
      // set html text
      document.querySelector(".message").innerText = `You lost! Play again?`;
      // set css style
      document.getElementById("main").style.backgroundColor = "red";
    } else {
      // set html text
      document.getElementById(
        "answer"
      ).innerText = `Your guess is ${inputNum} that is too high, my number is smaller`;
      document.getElementById("try").innerText = `Try again`;
    }
  } else if (inputNum === seacretNum) {
    // set html text
    document.getElementById(
      "answer"
    ).innerText = `Your guess ${inputNum} is spot on, my number is also ${seacretNum}`;
    document.querySelector(".message").innerText = `Play again?`;
    // set css style
    document.getElementById("main").style.backgroundColor = "rgb(0, 255, 13)";
  }
}
document.getElementById("check").addEventListener("click", function () {
  inputNum = Number(document.getElementById("num").value);
  compare();
});
document.getElementById("reset").addEventListener("click", function () {
  setNumber();
  document.getElementById("answer").innerText = `Your best guess:`;
  document.getElementById("main").style.backgroundColor = "blue";
  document.getElementById("num").value = null;
  document.getElementById("try").innerText = `Try it`;
  document.querySelector(".score").innerText = `20`;
});
