import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default class Quiz extends Component {

  componentDidMount(){
    const script = document.createElement("script");

    script.src = "./game.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return(
      <div>
        <Navbar />
        <head>
          <title>Quiz</title>
          <link rel="stylesheet" href="./quizstyles.css" />
          <link rel="stylesheet" href="./game.css" />
        </head>

        <body>
          <div className="container">
            <div className="score-counter">
              <div><h3 id="score-numbers">poop</h3></div>
              <div className="score-bar">
                <div id="score-percentage"></div>
              </div>
            </div>
            <div id="game" className="flex-column">
              <h2 id="question">Question</h2>
              <div className="choice-container">
                <p className="choice-prefix">A</p>
                <p className="choice-text" data-number="1">First choice</p>
              </div>
              <div className="choice-container">
                <p className="choice-prefix">B</p>
                <p className="choice-text" data-number="2">Second choice</p>
              </div>
              <div className="choice-container">
                <p className="choice-prefix">C</p>
                <p className="choice-text" data-number="3">Third choice</p>
              </div>
              <div className="choice-container">
                <p className="choice-prefix">D</p>
                <p className="choice-text" data-number="4">Fourth choice</p>
              </div>
            </div>
          </div>

        {/* <script src="../game.js"></script> */}
        </body>

      </div>
)
}
}