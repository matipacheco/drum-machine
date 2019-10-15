import React, { useState } from 'react';

function PlayPause() {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active)
  };

  return (
    <div className="fixed-bottom text-center play-pause">
      <a className={`play ${active ? 'active' : ''}`} onClick={ toggleClass }/>
    </div>
  )
}

export default PlayPause;