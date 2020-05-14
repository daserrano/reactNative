import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Box extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #FFF', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Children props</h4>
        <Box>Hola mundo!</Box>
        <Box>Otro box</Box>
      </header>
    </div>
  );
}
}

export default App;
