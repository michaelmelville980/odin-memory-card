import React from "react";
import ScoreBoard from "./Scoreboard/Scoreboard.jsx";
import styles from "./Header.module.css"

export default function Header({ currentScore, roundScore }) {
  return (
    <header className={styles.wholeHeader}>
      <div className={styles.firstBlock}>
        <h1>Pokemon Memory Game</h1>
        <ScoreBoard currentScore={currentScore} roundScore={roundScore} />
      </div>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
    </header>
  );
}
