// jshint esversion:6

const mostRecentScore = localStorage.getItem("mostRecentScore");
document.getElementById("scoreText").innerText = `You got ${mostRecentScore}/3 correct!`;

var word = ['Bravo!', 'Non male.', 'Riprova.']

var random = Math.floor(Math.random() * word.length);
var randomScore = word[random];

// var score = document.getElementById

document.getElementById("finalScore").innerText = `${randomScore}`;
