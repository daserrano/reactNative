import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {mensaje: 'Mensaje inicial'}
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    console.log('render')
    return (
    <div className="App">
      <header className="App-header">
        <h4>Ciclo de montaje: render</h4>
      </header>
    </div>
  );
}
}

export default App;
