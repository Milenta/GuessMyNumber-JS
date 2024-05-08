let num = 0;
let inputN;

function setNumber() {
  num = Number(Math.floor(Math.random() * 20 + 1));
}
setNumber();
function compare() {
  if (!inputN) {
    document.getElementById("answer").innerText = `You should input a number`;
  } else if (inputN < num) {
    document.getElementById(
      "answer"
    ).innerText = `Your guess is ${inputN}, that is too low, my number is bigger`;
    document.getElementById("try").innerText = `Try again`;
    document.getElementById("div2").style.backgroundColor = "red";
  } else if (inputN > num) {
    document.getElementById(
      "answer"
    ).innerText = `Your guess is ${inputN} that is too high, my number is smaller`;
    document.getElementById("try").innerText = `Try again`;
    document.getElementById("div2").style.backgroundColor = "red";
  } else if (inputN === num) {
    document.getElementById(
      "answer"
    ).innerText = `Your guess ${inputN} spot on, my number is ${num}`;
    document.getElementById("div2").style.backgroundColor = "rgb(0, 255, 13)";
  }
}
document.getElementById("check").addEventListener("click", function () {
  inputN = Number(document.getElementById("num").value);
  compare();
});
document.getElementById("reset").addEventListener("click", function () {
  setNumber();
  document.getElementById("answer").innerText = `Your best guess:`;
  document.getElementById("div2").style.backgroundColor = "blue";
  document.getElementById("num").value = null;
  document.getElementById("try").innerText = `Try it`;
});
