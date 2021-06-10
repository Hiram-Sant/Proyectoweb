import React from 'react';
import { skyAndGroundWidth } from '../Utileria/Constantes';
const Tierra = () => {
  const stilo = {
    fill: '#59a941',
  };
  const division = {
    stroke: '#458232',
    strokeWidth: '3px',
  };

  const groundWidth = 5000;

  return (
    <g id="tierra">
      <rect
        id="tierra-2"
        data-name="tierra"
        style={stilo}
        x={skyAndGroundWidth / -2}
        y={0}
        width={skyAndGroundWidth}
        height={100}
      />
      <line
        x1={groundWidth / -2}
        y1={0}
        x2={groundWidth / 2}
        y2={0}
        style={division}
      />
    </g>
  );
};

export default Tierra;