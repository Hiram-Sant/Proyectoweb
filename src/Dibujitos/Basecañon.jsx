import React from 'react';
import { pathFromBezierCurve } from '../Utileria/Formulas';

const Basecañon = (props) => {
  const estilobasecañon = {
    fill: '#a16012',
    stroke: '#75450e',
    strokeWidth: '2px',
  };

  const baseWith = 80;
  const halfBase = 40;
  const height = 60;
  const negativeHeight = height * -1;

  const curvascubicasbeizer = {
    ejeinicial: {
      x: -halfBase,
      y: height,
    },
    puntodecontrolinicial: {
      x: 20,
      y: negativeHeight,
    },
    finalpuntodecontrol: {
      x: 60,
      y: negativeHeight,
    },
    ejefinal: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <g>
      <path
        style={estilobasecañon}
        d={pathFromBezierCurve(curvascubicasbeizer)}
      />
      {/* Linea inferior */}
       <line
        x1={-halfBase}
        y1={height}
        x2={halfBase}
        y2={height}
        style={estilobasecañon}
      />
    </g>
  );
};

export default Basecañon;