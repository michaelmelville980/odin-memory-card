import React, { useState, useEffect } from "react";

export default function Score({ currentScore }) {
  const [score, setScore] = useState(0);

  /* Runs when currentScore changes */
  useEffect(() => {
    setScore(currentScore);
  }, [currentScore]);

  return <p>Score: {score}</p>;
}
