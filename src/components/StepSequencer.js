import React, { useState, useEffect } from "react";
import PlayerControls from "./PlayerControls";
import PlayerGrid from "./PlayerGrid";
import Tone from "tone";

document.documentElement.addEventListener("mousedown", () => {
  if (Tone.context.state !== "running") Tone.context.resume();
});

const initialNoteState = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
  drums.forEach(drum => drum.toMaster());
  const [noteCount, setNoteCount] = useState(16);
  const [noteSelect, setNoteSelect] = useState(initialNoteState);
  const [start, setStart] = useState(false);
  const [tempo, setTempo] = useState(120);
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    Tone.Transport.clear();
    Tone.Transport.scheduleRepeat(() => {
      let step = index % 16;
      // let bpmCount = 30000 / tempo;
      for (let i = 0; i < noteSelect.length; i++) {
        let note = drums[i];
        console.log(i, noteSelect);
        if (noteSelect[i][step] === 1) {
          note.start();
        }
      }
      index++;
    }, "8n");
    if (start) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
      Tone.Transport.clear();
      index = 0;
    }
  }, [start, noteSelect]);

  const updateNoteSelect = (drumIndex, noteIndex) => {
    let beat = [...noteSelect];
    let current = beat[drumIndex][noteIndex];
    beat[drumIndex][noteIndex] = current === 0 ? 1 : 0;
    setNoteSelect(beat);
  };

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
        noteSelect={noteSelect}
        updateBeat={updateNoteSelect}
      />
    </div>
  );
}

export default StepSequencer;
