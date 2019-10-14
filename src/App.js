import React, { useState } from 'react';
import Pad from "./components/Pad";
import { DRUM_MACHINE_SIZE } from "./utils/constants"

// https://stackoverflow.com/questions/45949874/reactjs-onkeypress-to-trigger-a-button-press

function App() {
  const [drumMachineSize, ] = useState(Array.from(Array(DRUM_MACHINE_SIZE).keys()));

  return (
    <div className='container text-center d-flex flex-column'>
      {
        drumMachineSize.map((rowIndex) => {
          return (
            <div key={rowIndex} className='row my-5'>
              {
                drumMachineSize.map((colIndex) => {
                  return (
                    <div key={colIndex} className="col">
                      <Pad rowIndex={rowIndex} colIndex={colIndex}/>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
