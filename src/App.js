import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props) {
//   return <h3>{props.title}</h3>
// }

// const Hello = (props) => <h3>{props.title}</h3>

class Hello extends Component {
  render() {
    return <h3>{this.props.title}</h3>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React</h2>
        <Hello title='(from props)'/>
      </header>
    </div>
  );
}

export default App;
