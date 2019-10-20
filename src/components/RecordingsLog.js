import React from 'react';

import Recording from './Recording'

function RecordingsLog(props) {
  return (
    <div className='w-30 sound-log-backgroung text-center py-3'>
      <h2 className='font-weight-light'> Recordings </h2>
      {
        props.recordings.map(() => {
          return <Recording/>
        })
      }
    </div>
  )
}

export default RecordingsLog;