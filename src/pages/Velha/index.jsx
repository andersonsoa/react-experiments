import React from "react";
import "./style.css";

import useCreateGame from "./engine";

let player = "X";

export default function Game() {
  const [cells, markCell, winner] = useCreateGame();

  function handleSelectCell(position) {
    markCell(position, player);
    player = player === "X" ? "O" : "X";
  }
  return (
    <section className="container">
      <div className="screen">
        {Object.keys(cells).map((cell, i) => {
          return (
            <div
              key={i}
              onClick={() => handleSelectCell(cells[cell].position)}
              className="cell"
              style={{
                backgroundColor: winner?.location?.includes(cell) ? "green" : ""
              }}
            >
              {cells[cell].value}
            </div>
          );
        })}
      </div>
    </section>
  );
}
