import { MOVE_OBJECTS,START_CA,TIRO } from '../Acciones';
import moveObjects from './moveObjects';
//pulse para continuar
import Ejecutar from './Ejecutar';
//import Ejecutar from '../Dibujitos/Ejecutar';
import tiro from './tiro'
//inicio
const initialCaState = {
  started: false,
  Balas:[],
};
//POSICION INICIAL
const initialState = {
  angle: 45,
  CaState:initialCaState,
};
//COMPRUEBA LA ACCION
function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
      case START_CA:
        return Ejecutar(state, initialCaState);
        case TIRO:
          return tiro(state,action)
      default:
        return state;
  }
}

export default reducer;