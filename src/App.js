import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Eventos</h4>
        <button onClick={() => alert('EVENTO')}> Llamar evento </button>
      </header>
    </div>
  );
}
}

export default App;
