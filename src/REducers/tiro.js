import { calculateAngle } from '../Utileria/Formulas';

function tiro(state, action) {
  if (!state.CaState.started) return state;

  const { Balas } = state.CaState;

  if (Balas.length === 2) return state;

  const { x, y } = action.mousePosition;

  const angle = calculateAngle(0, 0, x, y);

  const id = (new Date()).getTime();
  const Bala = {
    position: { x: 0, y: 0 },
    angle,
    id,
  };

  return {
    ...state,
    CaState: {
      ...state.CaState,
      Balas: [...Balas, Bala],
    }
  };
}

export default tiro;