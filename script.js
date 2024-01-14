let inputNumber = document.querySelector(".number");
let btnChoose = document.querySelector(".choose-btn");
let clue = document.querySelector(".clue-end ");
let resultGame = document.querySelector(".game-end");
let totalGame = document.querySelector(".game-number");
let howGame = document.querySelector(".counter-number");
let startBtn = document.querySelector(".start-btn");
let secretNumber = Math.ceil(Math.random() * 100);
let tries = 0;
let win = 0;
btnChoose.addEventListener("click", function () {
  console.log(secretNumber);
  let ansverNumber = inputNumber.value;
  console.log(ansverNumber);
  ansverNumber = +ansverNumber;
  if (ansverNumber == secretNumber) {
    inputNumber.classList.add("d-none");
    btnChoose.classList.add("d-none");
    clue.classList.add("d-none");
    resultGame.classList.remove("d-none");
    startBtn.classList.remove("d-none");
    tries++;
    win++;
    totalGame.textContent = tries;
    howGame.textContent = win;
    tries = 0;
    secretNumber = Math.ceil(Math.random() * 100);
  } else if (ansverNumber < secretNumber) {
    clue.textContent = "Больше";
    tries++;
  } else if (ansverNumber > secretNumber) {
    clue.textContent = "Меньше";
    tries++;
  }
  inputNumber.value = "";
});
startBtn.addEventListener("click", function () {
  inputNumber.classList.remove("d-none");
  btnChoose.classList.remove("d-none");
  clue.classList.remove("d-none");
  resultGame.classList.add("d-none");
  startBtn.classList.add("d-none");
  clue.textContent = "-";
});

// let number = Math.floor(Math.random() * 101);
// console.log(number);
// let guess = prompt("Ведите число от 1 до 100");
// let tries = 0;
// let check = 0;
// if (guess == null) {
//   alert("Игра окончена, загоданное число " + number);
//   check++;
// }
// guess = +guess;
// if (guess == number) {
//   tries++;
//   alert("Вы угадали число: " + number + " c " + tries + " попытки");
// }
// while (guess !== number && check == 0) {
//   if (isNaN(guess)) {
//     alert("Вы ввели не число!");
//     guess = prompt("Ведите число от 1 до 100");
//   } else if (guess < 1) {
//     alert("Вы ввели число меньше 1");
//     guess = prompt("Ведите число от 1 до 100");
//   } else if (guess > 100) {
//     alert("Вы ввели число больше 100");
//     guess = prompt("Ведите число от 1 до 100");
//   } else if (guess > number) {
//     alert("Число больше");
//     guess = prompt("Ведите число от 1 до 100");
//     tries++;
//   } else if (guess < number) {
//     alert("Число меньше");
//     guess = prompt("Ведите число от 1 до 100");
//     tries++;
//   }
// }
