import React from 'react';
import Sky from './Cielito';
import Tierra from './Tierra';
import Basecañon from './Basecañon'
import Cañondelcañon from './Cañondelcañon'
const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
 
  return (
    <svg
      id="lab"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}

    >
      <Sky />
      <Tierra />

      <Cañondelcañon cx={-775} cy={-15}  rotation={props.angle}/>
      <Basecañon cx={-800} cy={0} />
      
    </svg>
  );
};


export default Canvas;