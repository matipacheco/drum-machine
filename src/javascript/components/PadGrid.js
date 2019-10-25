import React from 'react';

import Pad from "./Pad";

function PadGrid(props) {
    return (
      <div className='text-center d-flex flex-column w-70 pad-grid-pt'>
        {
          props.drumMachineSize.map((rowIndex) => {
            return (
              <div key={rowIndex} className='row my-2 mx-auto'>
                {
                  props.drumMachineSize.map((colIndex) => {
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
  )
}

export default PadGrid;