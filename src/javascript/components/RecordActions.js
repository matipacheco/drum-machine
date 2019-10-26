import React, { useState } from 'react';

function RecordActions() {
  const [playingRecord, ] = useState(true);

  return(
    <span className='my-auto'>
      <i class={`fas fa-2x record-action-icon ${ playingRecord ? 'fa-pause-circle' : 'fa-play-circle'}`}></i>
      <i class="fas fa-2x fa-trash record-action-icon"></i>
    </span>
  )
}

export default RecordActions;