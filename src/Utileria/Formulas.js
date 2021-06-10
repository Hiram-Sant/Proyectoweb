export const pathFromBezierCurve = (curvascubicasbezier) => {
    //Seocupa para crear las formas del canyon y de la base ,FALTA PROBAR PARA EL PROYECTIL
    const {
      ejeinicial,puntodecontrolinicial ,finalpuntodecontrol,ejefinal,
    } = curvascubicasbezier;
    return `
      M${ejeinicial.x} ${ejeinicial.y}
      c ${puntodecontrolinicial.x} ${puntodecontrolinicial.y}
      ${finalpuntodecontrol.x} ${finalpuntodecontrol.y}
      ${ejefinal.x} ${ejefinal.y}
    `;
  };

  export const radiansToDegrees = radians => ((radians * 180) / Math.PI);
//HACE LOS CALCULOS PARA DAR EL ANGULO
//DA RADIANES 
// https://math.stackexchange.com/questions/714378/find-the-angle-that-creating-with-y-axis-in-degrees
export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  } else if (x2 < 0 && y2 >= 0) {
    return -90;
  }

  const dividend = x2 - x1;
  const divisor = y2 - y1;
  const quotient = dividend / divisor;
  return radiansToDegrees(Math.atan(quotient)) * -1;
};
//POSICION DEL MOUSE 
export const getCanvasPosition = (event) => {
    //
    // mouse position on auto-scaling canvas
    // https://stackoverflow.com/a/10298843/1232793
  
    const svg = document.getElementById('lab');
    const point = svg.createSVGPoint();
  
    point.x = event.clientX;
    point.y = event.clientY;
    const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
    return {x, y};
  };
  