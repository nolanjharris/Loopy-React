import React from "react";
import Drumline from "./Drumline";

function PlayerGrid(props) {
  const drumTypes = [
    "Snare",
    "Clap",
    "Kick",
    "Cymbol",
    "Hi-Hat Open",
    "Hi-Hat Closed",
    "Shaker"
  ];

  return (
    <div className="player grid">
      <div id="drums">
        {drumTypes.map((drum, i) => {
          return (
            <Drumline
              noteSelect={props.noteSelect}
              updateBeat={props.updateBeat}
              drumIndex={i}
              drum={drum}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayerGrid;
