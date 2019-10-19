import React, { useState } from 'react';
import Pad from "./Pad";
import { DRUM_MACHINE_SIZE } from "../utils/constants"
import PlayPause from "./PlayPause";

// https://stackoverflow.com/questions/45949874/reactjs-onkeypress-to-trigger-a-button-press
// https://medium.com/@dhilipkmr/ripple-in-react-3162875cc9af
// https://rwu823.github.io/react-ripples/
// https://freefrontend.com/css-button-click-effects/

function DrumMachine() {
  const [drumMachineSize, ] = useState(Array.from(Array(DRUM_MACHINE_SIZE).keys()));

  return (
    <div>
      <div className='container text-center d-flex flex-column'>
        {
          drumMachineSize.map((rowIndex) => {
            return (
              <div key={rowIndex} className='row my-4'>
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

      <PlayPause/>
    </div>
  );
}

export default DrumMachine;
