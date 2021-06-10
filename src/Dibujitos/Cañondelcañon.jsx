//Cañondelcañon
import React from 'react';
import { pathFromBezierCurve } from '../Utileria/Formulas';

const Cañondelcañon = (props) => {
  const estiloCañondelcañon = {
    fill: '#999',
    stroke: '#666',
    strokeWidth: '2px',
  };
  const transform = `rotate(${props.rotation}, 0, 0)`;

  const muzzleWidth = 40;
  const halfMuzzle = 20;
  const height = 100;
  const yBasis = 70;

  const curvascubicasbeizer = {
    ejeinicial: {
      x: -halfMuzzle,
      y: -yBasis,
    },
    puntodecontrolinicial: {
      x: -40,
      y: height * 1.7,
    },
    finalpuntodecontrol: {
      x: 80,
      y: height * 1.7,
    },
    ejefinal: {
      x: muzzleWidth,
      y: 0,
    },
  };

  return (
    <g transform={transform}>
      <path
        style={estiloCañondelcañon}
        d={pathFromBezierCurve(curvascubicasbeizer)}
      />
      <line
        x1={-halfMuzzle}
        y1={-yBasis}
        x2={halfMuzzle}
        y2={-yBasis}
        style={estiloCañondelcañon}
      />
    </g>
  );
};



export default Cañondelcañon;