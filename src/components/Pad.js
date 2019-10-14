import React, { useState } from 'react';
import {
  getPadColor,
  getPadAttackReleaseParams
} from "../utils/constants";

import Tone from "tone";

function Pad(props) {
  const [padRow, ] = useState(props.rowIndex);
  const [padCol, ] = useState(props.colIndex);

  const playPadSound = (event) => {
    const [note, duration] = getPadAttackReleaseParams(padRow, padCol);
    new Tone.Synth().toMaster().triggerAttackRelease(note, duration);
  };

  return (
    <button
      onClick={ playPadSound }
      className={`btn btn-pan ${ getPadColor(padRow, padCol) }`}
    />
  )
}

export default Pad;
