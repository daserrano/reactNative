import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EjemploDeComponentDidCatch from './sections/life-cycle/ejemploDeComponentDidCatch'

class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <EjemploDeComponentDidCatch/>
      </header>
    </div>
  );
}
}

export default App;
