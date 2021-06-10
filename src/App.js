
import React, {Component} from 'react';

import Canvas from './Dibujitos/Canvas';
import {getCanvasPosition} from './Utileria/Formulas';

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={event => (this.trackMouse(event))}
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