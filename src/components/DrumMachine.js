import React, { useState } from 'react';
import PadGrid from "./PadGrid";
import RecordingsLog from "./RecordingsLog"
import PlayPause from "./PlayPause";

import { DRUM_MACHINE_SIZE } from "../utils/constants"

// https://stackoverflow.com/questions/45949874/reactjs-onkeypress-to-trigger-a-button-press
// https://medium.com/@dhilipkmr/ripple-in-react-3162875cc9af
// https://rwu823.github.io/react-ripples/
// https://freefrontend.com/css-button-click-effects/

function DrumMachine() {
  const [drumMachineSize, ] = useState(Array.from(Array(DRUM_MACHINE_SIZE).keys()));

  return (
    <div>
      <div className='d-flex full-height'>
        <PadGrid drumMachineSize={drumMachineSize}/>
        <RecordingsLog recordings={[]}/>
      </div>
    
      <PlayPause/>
    </div>
  );
}

export default DrumMachine;