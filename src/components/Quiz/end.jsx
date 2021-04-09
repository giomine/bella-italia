import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class EndOfQuiz extends Component {

  componentDidMount(){
    const script = document.createElement("script");

    script.src = "./end.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return(
      <div>
        <Navbar />
        <head>
          <title>Finished</title>
          <link rel="stylesheet" href="game.css" />
          <link rel="stylesheet" href="quizstyles.css" />
        </head>
        <body>

        <div className="container">
          <h1 className="flex-column">Congratulations!</h1>
          <h2 id="scoreText" className="flex-column">poop</h2>
          <h2 id="finalScore" className="flex-column">Your score is: </h2>
          <a className="btn button-top" href="/1">Back to text</a>
          <a className="btn" href="/quiz">Retake quiz</a>
        </div>

        {/* <script src="end.js" charset="utf-8"></script> */}
        </body>
        <Footer />
      </div>
)
}
}