import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contador extends Component {
  constructor() {
    super()
    this.state = { contador: 1}
    setInterval(() => {
      this.setState({contador: this.state.contador + 1 })
    }, 1000)
  }

  render() {
    return <ContadorNumero numero={this.state.contador} />
  }
}

class ContadorNumero extends Component {
  render () {
    return <div background-color="#FABADA">
          <h2>{this.props.numero}</h2>
          <h1>{this.props.numero}</h1>
      </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador/>
      </header>
      
    </div>
  );
}

export default App;
