import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {mouseX: 0, mouseY: 0}
    //Forma de enlazar el contexto.
    //this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  //Arrow function para enlazar el contexto del componente, forma óptima.
  handleMouseMove = (e) => {
    const {clientX, clientY} = e
      this.setState({mouseX: clientX, mouseY: clientY })
  }

  handleClick(e) {
    console.log(e)
    alert('Evento!')
  }

    render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}> Llamar evento </button>
        <div onMouseMove={this.handleMouseMove}
        style={{
          border: '1px solid #FFF',
          marginTop: 10,
          padding: 10,
          paddingLeft: 100,
          paddingRight:100}
        }>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </header>
    </div>
  );
}
}

export default App;
