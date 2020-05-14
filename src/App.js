import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //constructor() {}  //Constructor por defecto.

  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {mensaje: 'Mensaje inicial'}
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.setState({mensaje: 'mensaje modificado'})
  }

  render() {
    console.log('render')
    return (
    <div className="App">
      <header className="App-header">
        <h4>Ciclo de montaje: componentWillMount</h4>
        {this.state.mensaje}
      </header>
    </div>
  );
}
}

export default App;
