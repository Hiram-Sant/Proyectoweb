import { calculateNextPosition } from '../Utileria/Formulas';

const moveBalas = Balas => (
  Balas
    .filter(Bala => (
      Bala.position.y > -800 && Bala.position.x > -500 && Bala.position.x < 500
    ))
    .map((Bala) => {
      const { x, y } = Bala.position;
      const { angle } = Bala;
      return {
        ...Bala,
        position: calculateNextPosition(x, y, angle, 5),
      };
    })
);

export default moveBalas;