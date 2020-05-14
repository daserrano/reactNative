import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //constructor() {}  //Constructor por defecto.

  constructor(props) {
    super(props) //Constructor de Component
    //Inicializamos el state del componente
    this.state = {mensajeInicial: 'Mensaje inicial'}
    //bindeamos el contexto al método
    //this.handleClick = this.handleClick.bind(this)
  }

  //Otra forma de tener el contexto es el arrow function
  handleClick = () => {
    this.setState({mensajeInicial: 'Mensaje cambiado'})
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Ciclo de montaje: constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>
          Cambiar mensaje
        </button>
      </header>
    </div>
  );
}
}

export default App;
