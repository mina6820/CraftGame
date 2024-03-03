const logo = document.querySelector(".logo");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.querySelector("button");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const lostEl = document.getElementById("lose");
logo.addEventListener('click',function(){
  open('../index.html','_self')
})
let time = 21;
let setTime;
let score = 0;
let answer;
score = parseInt(sessionStorage.getItem("score")) || 0;
scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("click", () => {
  const userAns = Number(inputEl.value);
  if (userAns === answer) {
    score++;
    scoreEl.innerText = `score: ${score}`;
    updateSessionStorage();
    generateQuestion();
    time = 21;
    inputEl.value = '';
  } else {
    score--;
    scoreEl.innerText = `score: ${score}`;
    updateSessionStorage();
    generateQuestion();
    time = 20;
    inputEl.value = '';
  }
});

time = 20;
setTime = setInterval(function () {
  time--;
  if (time >= 0) {
    timeEl.innerText = `time: ${time}`;
  } else {
    time = 20;
    timeEl.innerText = `time: ${time}`;
    score--;
    updateSessionStorage();
    scoreEl.innerText = `score: ${score}`;
    generateQuestion();
  }
}, 1000);

function randomNumber() {
  const num = Math.floor(Math.random() * 10) + 1;
  return num;
}

function randomOperator() {
  const operators = ["*", "/", "-", "+"];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomEle = operators[randomIndex];
  return randomEle;
}

function generateQuestion() {
  const section = Math.floor(Math.random() * 6);
  if (section == 0 || section == 1) {
    return generateQuestion();
  } else {
    let cartoona = [];
    for (let i = 0; i < section; i++) {
      if (i == section - 1) {
        cartoona.push(randomNumber());
      } else {
        cartoona.push(randomNumber());
        cartoona.push(randomOperator());
      }
    }
    const question = cartoona.join("");
    answer = Math.round(eval(question));
    scoreEl.innerText = `score: ${score}`;
    questionEl.innerHTML = `${question}?`;
  }
}

generateQuestion();

function updateSessionStorage() {
  sessionStorage.setItem("score", JSON.stringify(score));
}
