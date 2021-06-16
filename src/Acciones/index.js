export const MOVE_OBJECTS = 'MOVE_OBJECTS';

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});
// boton Iniciar los tiros//no disparos
export const START_CA = 'START_CA';

export const Ejecutar = () => ({
  type: START_CA,
});
//disparos

export const TIRO='TIRO'
export const Tiro = (mousePosition) => ({
  type: TIRO,
  mousePosition,
});