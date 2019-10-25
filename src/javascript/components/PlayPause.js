import React, { useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { connect } from 'react-redux';
import store from "../store";
import updateRecordingStatusDispatcher from "../dispatchers/recordingsDispatcher";


function PlayPause(props) {
  const [isRecording, setIsRecording] = useState(props.isRecording);
  const [recordingStartTime, setRecordingStartTime] = useState(null);

  const toggleClass = () => {
    const startTime = new Date();

    setIsRecording(!isRecording);
    setRecordingStartTime(recordingStartTime ? null : startTime);

    store.dispatch(updateRecordingStatusDispatcher(
      (recordingStartTime ? null : startTime),
      !isRecording)
    );
  };

  return (
    <div className="fixed-bottom text-center recording-backgroung">
      <button id='recording-button' className={`${isRecording ? 'recording' : 'not-recording'}`} onClick={ toggleClass }/>
      <KeyboardEventHandler
        handleKeys={['Enter']}
        onKeyEvent={ (key, event) => { toggleClass() }}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isRecording: state.isRecording,
  }
};

export default connect(mapStateToProps)(PlayPause);