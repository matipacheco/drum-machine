import React, { useState } from 'react';
import { getPadColor, getPadKeyCode } from "../utils/constants";

function Pad(props) {
  const [padRow, ] = useState(props.rowIndex);
  const [padCol, ] = useState(props.colIndex);

  const [padKeyCode, ] = useState(getPadKeyCode(padRow, padCol));

  return (
    <button
      onClick={() => {alert(padKeyCode)}}
      className={`btn btn-pan ${ getPadColor(padRow, padCol) }`}
    />
  )
}

export default Pad;
