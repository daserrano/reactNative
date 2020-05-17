import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EjemploDeComponentWillUnmount from './sections/life-cycle/componentWillUnmount'

class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <EjemploDeComponentWillUnmount/>
      </header>
    </div>
  );
}
}

export default App;
