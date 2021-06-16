import React from 'react';
import PropTypes from 'prop-types';

const Bala = (props) => {
  const estilobala = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };
  return (
    <ellipse
      style={estilobala}
      cx={props.position.x}
      cy={props.position.y}
      rx="16"
      ry="16"
    />
  );
};

Bala.propTypes = {
  position: PropTypes.shape({
   x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Bala;