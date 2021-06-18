
import React, {Component} from 'react';

import Canvas from './Dibujitos/Canvas';
import {getCanvasPosition} from './Utileria/Formulas';

class App extends Component {

  /* constructor(props) {
    super(props);
    this.tiro = this.tiro.bind(this);
    
  } */

  componentDidMount() {
    const self = this;
    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 10);
    window.onresize = () => {
      const cnv = document.getElementById('lab');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }
  
  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  } 
  /* tiro() {
    this.props.tiro(this.canvasMousePosition);
  } */

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        CaState={this.props.CaState}
        Ejecutar={this.props.Ejecutar}
        trackMouse={event => (this.trackMouse(event))}
        /* tiro={this.tiro} */
      />
    );
  }
  
  
  //render() {
   // return (
    //  <div className="App">
    //    <h1>{this.props.message}</h1>
     // </div>
    //);
  //}
  //Esto nodeja ver el canvas
}


export default App;