import React from "react";
import Step from "./Step";

function Drumline(props) {
  const drumTrack = props.noteSelect[props.drumIndex];
  return (
    <div className="instruments" id="drums1">
      <div className="soundType">{props.drum}</div>
      {drumTrack.map((e, i) => {
        return (
          <Step
            noteSelect={props.noteSelect}
            drumIndex={props.drumIndex}
            beatIndex={i}
            drumTrack={drumTrack}
            updateBeat={props.updateBeat}
          />
        );
      })}
    </div>
  );
}

export default Drumline;
