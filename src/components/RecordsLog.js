import React from 'react';

import Record from './Record'

function RecordsLog(props) {
  return (
    <div className='w-30 recording-log-backgroung py-3 container'>
      <h2 className='font-weight-light mb-4 text-center'> Recordings </h2>
      {
        props.recordings.map(() => {
          return <Record/>
        })
      }
    </div>
  )
}

export default RecordsLog;