import React from "react";
import styles from "./Card.module.css";

export default function Card({ imgUrl, imgText, onClick }) {
  return (
    <div className={styles.root}>
      <img src={imgUrl} alt={imgText} onClick={onClick} />
      <h2>{imgText}</h2>
    </div>
  );
}
