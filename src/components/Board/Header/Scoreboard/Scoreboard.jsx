import React from "react";
import Score from "./Score/Score.jsx";
import BestScore from "./BestScore/BestScore.jsx";
import styles from "./Scoreboard.module.css";

export default function ScoreBoard({ currentScore, roundScore }) {

 


  return (
    <div className = {styles.root}>
      <Score currentScore={currentScore} />
      <BestScore roundScore={roundScore} />
    </div>
  );
}
