import React from 'react';

import Record from './Record'

import { connect } from 'react-redux';


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

const mapStateToProps = (state) => {
  return {
    recordings: state.recordings,
  }
};

export default connect(mapStateToProps)(RecordsLog);