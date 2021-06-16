import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../Utileria/Constantes';
//Esta chingadera no se ve , no se que anda mal
const Ejecutar = (props) => {
  const button = {
    x: gameWidth / -2, // Ancho
    y: -280, // menos arriba 
    width: gameWidth,
    height: 200,
    rx: 10, // borderadio
    ry: 10, // borderadio
    style: {
      fill: 'transparent',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };

  const text = {
    textAnchor: 'middle', // centra
    x: 0, // centro en x
    y: -150, // 150 arrriba de 0 (Y)
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 60,
      fill: '#f70000',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g filter="url(#shadow)">
      <rect {...button} />
      <text {...text}>
        Click para empezar!
      </text>
    </g>
  );
};

Ejecutar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Ejecutar;