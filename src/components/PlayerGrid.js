import React from "react";
import Tone from "tone";

function PlayerGrid(props) {
  let clickBeatArr = [];
  for (let i = 1; i <= props.noteCount; i++) {
    if ((i - 1) % 4 === 0) {
      clickBeatArr.push(`clickBeat beat${i} emphasize`);
    } else {
      clickBeatArr.push(`clickBeat beat${i}`);
    }
  }
  return (
    <div className="player grid">
      <div id="drums">
        <div className="instruments" id="drums1">
          <div className="soundType">Snare</div>
          {clickBeatArr.map((e, i) => {
            return <div key={i} className={e}></div>;
          })}
        </div>
        <div className="instruments" id="drums2">
          <div className="soundType">Clap</div>
          {clickBeatArr.map((e, i) => {
            return <div key={i} className={e}></div>;
          })}
        </div>
        <div className="instruments" id="drums3">
          <div className="soundType">Kick</div>
          {clickBeatArr.map((e, i) => {
            return <div key={i} className={e}></div>;
          })}
        </div>
        <div className="instruments" id="drums4">
          <div className="soundType">Cymbol</div>
          {clickBeatArr.map((e, i) => {
            return <div key={i} className={e}></div>;
          })}
        </div>
        <div className="instruments" id="drums5">
          <div className="soundType">Hi-Hat Open</div>
          {clickBeatArr.map((e, i) => {
            return <div key={i} className={e}></div>;
          })}
        </div>
        <div className="instruments" id="drums6">
          <div className="soundType">Hi-Hat Closed</div>
          {clickBeatArr.map((e, i) => {
            return <div key={i} className={e}></div>;
          })}
        </div>
        <div className="instruments" id="drums7">
          <div className="soundType">Shaker</div>
          {clickBeatArr.map((e, i) => {
            return <div key={i} className={e}></div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayerGrid;
