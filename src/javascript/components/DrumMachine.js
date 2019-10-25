import React, { useState } from 'react';
import PadGrid from "./PadGrid";
import RecordsLog from "./RecordsLog"
import PlayPause from "./PlayPause";

import { DRUM_MACHINE_SIZE } from "../utils/constants"

import store from "../store";
import {Provider} from "react-redux";


function DrumMachine() {
  const [drumMachineSize, ] = useState(Array.from(Array(DRUM_MACHINE_SIZE).keys()));

  return (
    <Provider store={store}>
      <div>
        <div className='d-flex full-height'>
          <PadGrid drumMachineSize={drumMachineSize}/>
          <RecordsLog recordings={[]}/>
          {/*<RecordsLog recordings={this.props.recordings}/>*/}
        </div>

        <PlayPause/>
      </div>
    </Provider>
  );
}

export default DrumMachine;