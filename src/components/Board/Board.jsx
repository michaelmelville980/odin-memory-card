import React, { useState, useEffect } from "react";
import { range, sampleSize } from "lodash";
import Card from "./Card/Card.jsx";
import Header from "./Header/Header.jsx";
import styles from "./Board.module.css";

export default function Board() {
  /* States */
  const [pokemons, setPokemons] = useState([]);
  const [clickedNames, setClickedNames] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);

  /* Loads pokemons via API on mount and adds isClicked property */
  useEffect(() => {
    async function fetchData(listUrl) {
      const resArr = await fetch(listUrl);
      if (!resArr.ok) throw new Error(resArr.status);
      const { results } = await resArr.json();

      // Fetch details in parallel
      const final = await Promise.all(
        results.map(async (pokemon) => {
          const resDetails = await fetch(pokemon.url);
          if (!resDetails.ok) throw new Error(resDetails.status);
          const detail = await resDetails.json();
          return {
            name: pokemon.name,
            imgUrl: detail.sprites.front_default,
            isClicked: false,
          };
        })
      );
      setPokemons(final);
    }
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
  }, []);

  /* Handle Clicks (updating currentScore, roundScore, and isClicked appropriately and calling renderBoard() to re-randomize board) */
  const handleClick = function (name) {
    if (clickedNames.has(name)) {
      setRoundScore(currentScore);
      setCurrentScore(0);
      setClickedNames(new Set());
    } else {
      setCurrentScore((s) => s + 1);
      setClickedNames((prev) => new Set(prev).add(name));
    }
  };

  /* Creates and Randomizes Pokemon Board */
  const renderBoard = function () {
    const randomCardOrder = sampleSize(range(pokemons.length), pokemons.length);

    return randomCardOrder.map((index) => {
      const pokemon = pokemons[index];
      return (
        <Card
          key={pokemon.name}
          imgText={pokemon.name}
          imgUrl={pokemon.imgUrl}
          onClick={() => handleClick(pokemon.name)}
        />
      );
    });
  };

  return (
    <div>
      <Header currentScore={currentScore} roundScore={roundScore} />
      <div className={styles.root}>{renderBoard()}</div>
    </div>
  );
}
