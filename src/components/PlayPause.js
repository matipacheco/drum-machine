import React, { useState } from 'react';

function PlayPause() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleClass = () => {
    setIsRecording(!isRecording)
  };

  return (
    <div className="fixed-bottom text-center recording-backgroung">
      <button id='recording-button' className={`${isRecording ? 'recording' : 'not-recording'}`} onClick={ toggleClass }/>
    </div>
  )
}

export default PlayPause;