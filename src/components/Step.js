import React from "react";

function Step(props) {
  let selectedNote = props.drumTrack[props.beatIndex] === 1 ? " on" : "";
  let setClass;
  if (props.beatIndex % 4 === 0) {
    setClass = "clickBeat emphasize" + selectedNote;
  } else {
    setClass = "clickBeat" + selectedNote;
  }

  return (
    <div
      key={props.beatIndex}
      className={setClass}
      onClick={() => props.updateBeat(props.drumIndex, props.beatIndex)}
    ></div>
  );
}

export default Step;
