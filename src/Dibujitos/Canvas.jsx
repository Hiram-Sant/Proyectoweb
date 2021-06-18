import React from 'react';
import Sky from './Cielito';
import Tierra from './Tierra';
import Basecañon from './Basecañon'
import Cañondelcañon from './Cañondelcañon'
import Bala from './Bala'
import Ejecutar from './Ejecutar'

const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
  return (
    <svg
      id="lab"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
      onClick={props.tiro}

    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Tierra />
      {/* {props.CaState.Balas.map(Bala => (
        <Bala
          key={Bala.id}
          position={Bala.position}
        />
      ))} */}
      <Cañondelcañon cx={-775} cy={-15}  rotation={props.angle}/>
      <Basecañon cx={-800} cy={0} />
      
      { ! props.CaState.started &&
        <g>
          <Ejecutar onClick={() => props.Ejecutar()} />
          
        </g>
      }
      
      {/* <Ejecutar onClick={() => console.log('lab')} /> */}
      <Bala position={{x: 0, y: -100}}  />
    </svg>
  );
};


export default Canvas;