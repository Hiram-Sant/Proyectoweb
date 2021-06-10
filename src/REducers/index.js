import { MOVE_OBJECTS } from '../Acciones';
import moveObjects from './moveObjects';

//POSICION INICIAL
const initialState = {
  angle: 45,
};
//COMPRUEBA LA ACCION
function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default reducer;