import React, { useState } from 'react';
import {
  getPadColor,
  getPadAttackReleaseParams
} from "../utils/constants";

import Tone from "tone";

import { connect } from 'react-redux';


function Pad(props) {
  const [padRow, ] = useState(props.rowIndex);
  const [padCol, ] = useState(props.colIndex);

  const playPadSound = (event) => {
    event.preventDefault();
    const [note, duration] = getPadAttackReleaseParams(padRow, padCol);
    new Tone.Synth().toMaster().triggerAttackRelease(note, duration);
  };

  return (
    <div
      onClick={ playPadSound }
      className={`btn btn-pad ${ getPadColor(padRow, padCol) }`}
    />
  )
}

export default Pad;
