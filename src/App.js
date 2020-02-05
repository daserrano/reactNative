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

class Text extends Component {
  render() {
    return <p>{this.props.text}</p>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='(from props)'/>
        <Text text='Texto'/>
      </header>
      
    </div>
  );
}

export default App;
