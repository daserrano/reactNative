import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
      const numbers = [1, 1, 3, 4, 5]
    return (
    <div className="App">
      <header className="App-header">
        <h4>Trabajando con listas</h4>
        {numbers.map((number, index) => {
          return <p key={index}>Soy el número {number} </p>
        })}
      </header>
    </div>
  );
}
}

export default App;
