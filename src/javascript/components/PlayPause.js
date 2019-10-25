import React, { useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { connect } from 'react-redux';
import store from "../store";
import toggleRecordingDispatcher from '../dispatchers/toggleRecordingDispatcher'


function PlayPause(props) {
  const [isRecording, setIsRecording] = useState(props.isRecording);

  const toggleClass = () => {
    setIsRecording(!isRecording);
    store.dispatch(toggleRecordingDispatcher(!isRecording))
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