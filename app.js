const container = document.querySelector(".container");
const uppText = document.querySelector(".upp-text");
const downText = document.querySelector(".down-text");
const ac = document.querySelector(".ac");
const modulus = document.querySelector(".modulus");
const divide = document.querySelector(".division");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");
const multiply = document.querySelector(".multiply");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const minus = document.querySelector(".minus");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const plus = document.querySelector(".plus");
const number0 = document.querySelector(".number0");
const equal = document.querySelector(".equal");
const point = document.querySelector(".point");
const root = document.querySelector(".root");
const sound = document.querySelector(".sound");

ac.addEventListener("click", () => {
  uppText.textContent = "";
  downText.textContent = "";
});

number1.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "1";
    downText.textContent = "";
  } else {
    downText.textContent += "1";
  }
});

number2.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "2";
    downText.textContent = "";
  } else {
    downText.textContent += "2";
  }
});

number3.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "3";
    downText.textContent = "";
  } else {
    downText.textContent += "3";
  }
});

number4.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "4";
    downText.textContent = "";
  } else {
    downText.textContent += "4";
  }
});

number5.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "5";
    downText.textContent = "";
  } else {
    downText.textContent += "5";
  }
});

number6.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "6";
    downText.textContent = "";
  } else {
    downText.textContent += "6";
  }
});

number7.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "7";
    downText.textContent = "";
  } else {
    downText.textContent += "7";
  }
});

number8.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "8";
    downText.textContent = "";
  } else {
    downText.textContent += "8";
  }
});

number9.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "9";
    downText.textContent = "";
  } else {
    downText.textContent += "9";
  }
});

number0.addEventListener("click", () => {
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "";
    downText.textContent = "";
  } else {
    downText.textContent += "0";
  }
});
