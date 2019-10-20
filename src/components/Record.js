import React from 'react';
import RecordActions from './RecordActions';
import Equalizer from "./Equalizer";

function Record() {
  return (
    <div className='mx-3 my-3 recording-properties d-flex'>
      <Equalizer/>
      <RecordActions/>
    </div>
  )
}

export default Record;