import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EjemploDeCicloDeActualizacion from './sections/life-cycle/ejemploCicloDeActualizacion'

class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <EjemploDeCicloDeActualizacion/>
      </header>
    </div>
  );
}
}

export default App;
