import{connect}from 'react-redux';
import App from '../App'
import { moveObjects, Ejecutar,Tiro } from '../Acciones/index';

//import { moveObjects } from '../Acciones/index';
//USA LA ACCION Y EL RECDUCT
const mapStateToProps = state => ({
  angle: state.angle,
  CaState: state.CaState,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
  Ejecutar:()=>{
    dispatch(Ejecutar());
  },
  Tiro: (mousePosition) => {
    dispatch(Tiro(mousePosition))
  },
});


const Canyon = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Canyon;