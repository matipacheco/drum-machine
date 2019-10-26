import React, { useState, useEffect } from 'react';
import {
  getPadColor,
  getPadAttackReleaseParams
} from "../utils/constants";

import Tone from "tone";

import { connect } from 'react-redux';
import store from "../store";
import { addBeatToRecording } from "../dispatchers/recordingsDispatcher";

function Pad(props) {
  const [padRow, ] = useState(props.rowIndex);
  const [padCol, ] = useState(props.colIndex);
  const [isRecording, setIsRecording] = useState(props.isRecording);
  const [recordingStartTime, setRecordingStartTime] = useState(props.startTime);

  const [note, duration] = getPadAttackReleaseParams(padRow, padCol);

  useEffect(() => {
    setIsRecording(props.isRecording);
    setRecordingStartTime(props.startTime)
  });

  const addSoundToRecording = () => {
    const now = new Date().getTime();
    const thaBeat = {
      ts: now,
      note: note,
      time: (now - recordingStartTime) / 1000,
    };

    store.dispatch(addBeatToRecording(thaBeat))
  };

  const playPadSound = (event) => {
    event.preventDefault();
    new Tone.Synth().toMaster().triggerAttackRelease(note, duration);
    
    if (isRecording)
      addSoundToRecording();
  };

  return (
    <div
      onClick={ playPadSound }
      className={`btn btn-pad ${ getPadColor(padRow, padCol) }`}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    startTime: state.recordingStatus.startTime,
    isRecording: state.recordingStatus.isRecording,
  }
};

export default connect(mapStateToProps)(Pad);
