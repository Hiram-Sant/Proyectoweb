import{connect}from 'react-redux';
import App from '../App';

import { moveObjects } from '../Acciones/index';
//USA LA ACCION Y EL RECDUCT
const mapStateToProps = state => ({
  angle: state.angle,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
});

const Canyon = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Canyon;