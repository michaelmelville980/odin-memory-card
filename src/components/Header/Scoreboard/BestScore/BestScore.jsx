import React, { useState, useEffect } from "react";

export default function BestScore({ roundScore }) {
  const [bestScore, setBestScore] = useState(0);

  /* Runs when roundScore or bestScore change */
  useEffect(() => {
    if (roundScore > bestScore) {
      setBestScore(roundScore);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundScore]);

  return (<p>Best Score: {bestScore}</p>);
}
