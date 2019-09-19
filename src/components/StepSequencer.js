import React, { useState, useEffect } from "react";
import PlayerControls from "./PlayerControls";
import PlayerGrid from "./PlayerGrid";
import Tone from "tone";

function StepSequencer(props) {
  const drumOptions = ['snare', 'clap', 'kick', 'cymbol', 'hihatOpen', 'hihatClosed', 'shaker'];
  const drums = [
    new Tone.Player("/drums/snare.wav"),
    new Tone.Player("/drums/clap.wav"),
    new Tone.Player("/drums/kick.wav"),
    new Tone.Player("/drums/cymbol.wav"),
    new Tone.Player("/drums/hihat-open.wav"),
    new Tone.Player("/drums/hihat-closed.wav"),
    new Tone.Player("/drums/shaker.wav")
  ];
  const [noteCount, setNoteCount] = useState(16);
  const initialNoteState = {
    snare: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    clap: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    kick: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    cymbol: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    hihatOpen: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    hihatClosed: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    shaker: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };
  const [noteSelect, setNoteSelect] = useState(initialNoteState);
  const [start, setStart] = useState(false);
  const [tempo, setTempo] = useState(120)
  // useEffect(() => {
  //   let notes = noteCount < noteSelect[0].length ?
  //   noteSelect.slice(0, noteCount) :

  //   setNoteSelect(notes)
  // }, [noteCount, noteSelect])
  useEffect(() => {
    if (start) {
      Tone.Transport.start();
      Tone.Transport.scheduleRepeat(repeat, "8n");
    } else {
      Tone.Transport.stop();
      index = 0;
    }
  });
  let index = 0;
  function repeat(){
    let step = index % 16;
    let bpmCount = 30000 / tempo;
    for(let i = 0; i < drums.length; i++){
      let note = drums[i];
      let beat = 
    }
    index++;
  }

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
