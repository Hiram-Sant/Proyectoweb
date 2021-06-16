import { calculateAngle } from '../Utileria/Formulas';
import moveBalas from './Movimiento';
//ACCION DEL CANYON
//PROBAR PARA LOS PROYECTILES 
//elimina xy y las mousePosition transmite para que funcionen calculateAngle
//en un nuevo ángulo. genera nuevo objetocon un nuevo valor de ángulo.
function moveObjects(state, action) {
  if (!state.CaState.started) return state;

  let Balas = moveBalas(state.CaState.Balas);
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition;
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    CaState:{
      ...state.CaState,
      Balas,
    },
    angle,
  };
}

export default moveObjects;