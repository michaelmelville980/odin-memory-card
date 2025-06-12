import React from "react";
import Score from "./Score/Score.jsx";
import BestScore from "./BestScore/BestScore.jsx";

export default function ScoreBoard({ currentScore, roundScore }) {
  return (
    <div>
      <Score currentScore={currentScore} />
      <BestScore roundScore={roundScore} />
    </div>
  );
}
