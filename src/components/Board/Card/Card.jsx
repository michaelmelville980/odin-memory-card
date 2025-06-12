import React from "react";

export default function Card({ imgUrl, imgText }) {
  return (
    <div>
      <img src={imgUrl} alt={imgText} />
      <h2>{imgText}</h2>
    </div>
  );
}
