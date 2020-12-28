const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let arrayOfObjects = [
       {
           question: "percorsi pedonali",
           choice1: "transportation systems",
           choice2: "carriages",
           choice3: "pedestrian routes",
           choice4: "more hidden",
           answer: 3
       },
       {
           question: "ponti",
           choice1: "bridges",
           choice2: "banks",
           choice3: "lanes",
           choice4: "fields",
           answer: 1
       },
       {
           question: "tesori",
           choice1: "time",
           choice2: "alleys",
           choice3: "museums",
           choice4: "treasures",
           answer: 4
       }

];


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = arrayOfObjects.length;

function startGame(){
  questionCounter = 0;
  score = 0;
  availableQuestions = [...arrayOfObjects];
  getNewQuestion();
}

function getNewQuestion(){
  localStorage.setItem("mostRecentScore", score);
  if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("/end");
  }

  questionCounter++;

  var quizProgress = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  document.getElementById("score-numbers").innerText = quizProgress;

  var barWidth = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  document.getElementById("score-percentage").style.width = barWidth;

  let questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach (choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener("click", function(e){
    let quack = new Audio("quack.mp3");
    quack.play();
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
      score++;
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(function(){
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 800);
 });
});

startGame();
