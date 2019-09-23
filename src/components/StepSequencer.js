import React, { useState, useEffect } from "react";
import PlayerControls from "./PlayerControls";
import PlayerGrid from "./PlayerGrid";
import Tone from "tone";

// const snare = new Tone.Player("./snare.wav").toMaster();

document.documentElement.addEventListener("mousedown", () => {
  if (Tone.context.state !== "running") Tone.context.resume();
});
const initialNoteState = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const drumTypes = [
  "snare",
  "clap",
  "kick",
  "cymbol",
  "hihatOpen",
  "hihatClosed",
  "shaker"
];
const drums = [
  new Tone.Player("./drums/snare.wav").toMaster(),
  new Tone.Player("./drums/clap.wav").toMaster(),
  new Tone.Player("./drums/kick.wav").toMaster(),
  new Tone.Player("./drums/cymbol.wav").toMaster(),
  new Tone.Player("./drums/hihat-open.wav").toMaster(),
  new Tone.Player("./drums/hihat-closed.wav").toMaster(),
  new Tone.Player("./drums/shaker.wav").toMaster()
];
function StepSequencer(props) {
  // for (let i = 0; i < drumTypes.length; i++) {
  //   drums[drumTypes[i]].toMaster();
  // }
  drums.forEach(drum => drum.toMaster());
  const [noteCount, setNoteCount] = useState(16);
  const [noteSelect, setNoteSelect] = useState(initialNoteState);
  const [start, setStart] = useState(false);
  const [tempo, setTempo] = useState(120);
  // const [index, setIndex] = useState(0);
  let index = 0;
  // useEffect(() => {
  //   let notes = noteCount < noteSelect[0].length ?
  //   noteSelect.slice(0, noteCount) :

  //   setNoteSelect(notes)
  // }, [noteCount, noteSelect])

  const repeat = () => {
    let step = index % 16;
    let bpmCount = 30000 / tempo;
    for (let i of noteSelect) {
      let note = drums[i];
      console.log(i, noteSelect);
      if (noteSelect[i][index] === 1) {
        note.start();
      }
    }
    // setIndex(index + 1);
    index++;
  };

  useEffect(() => {
    Tone.Transport.scheduleRepeat(() => {
      // debugger;
      let step = index % 16;
      // let bpmCount = 30000 / tempo;
      for (let i = 0; i < noteSelect.length; i++) {
        let note = drums[i];
        console.log(i, noteSelect);
        if (noteSelect[i][step] === 1) {
          note.start();
        }
      }
    }, "8n");
    // drums[0].start();
    // index++;
  }, [index]);

  useEffect(() => {
    if (start) {
      Tone.Transport.start();
      index++;
      // drums[0].start();
      console.log(index);
    } else {
      Tone.Transport.stop();
      index = 0;
    }
  }, [start]);

  return (
    <div id="step-sequencer">
      <PlayerControls
        start={start}
        setStart={setStart}
        setNoteCount={setNoteCount}
        tempo={tempo}
        setTempo={setTempo}
      />
      <PlayerGrid
        noteCount={noteCount}
        start={start}
        setNoteSelect={setNoteSelect}
      />
    </div>
  );
}

export default StepSequencer;
