import React from "react";

function PlayerControls(props) {
  return (
    <div id="playerControls">
      <div id="playerControlButtons">
        <h1 id="loopy">Loopy</h1>
        <select
          name="beatCount"
          className="btn"
          id="beatCount"
          onChange={e => {
            props.setNoteCount(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="16" id="16beat" defaultValue>
            16 notes
          </option>
          <option value="32" id="32beat">
            32 notes
          </option>
          <option value="64" id="64beat">
            64 notes
          </option>
        </select>
        <button
          onClick={() => props.setStart(true)}
          className="btn"
          id="playButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
        <button
          href=""
          className="btn"
          id="stopButton"
          onClick={() => props.setStart(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>
        <button href="" className="btn" id="clearButton">
          Clear
        </button>
      </div>
      <div id="tempoDiv">
        <h4>BPM:{props.tempo}</h4>
        <input
          type="range"
          className="slider"
          id="tempoSlider"
          min="60"
          max="240"
          step="1"
          value={props.tempo}
          onChange={e => props.setTempo(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PlayerControls;
