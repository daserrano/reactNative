import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick(e) {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('twitter').value
    console.log({name, email});
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Formularios</h4>
        <form>
          <p>
            <label>Nombre: </label>
            <input
              id='name'
              name='userName'
              placeholder='Introduce tu nombre'/>
          </p>

          <p>
            <label>Twitter: </label>
            <input
              id='twitter'
              name='twitterAccount'
              placeholder='Introduce tu Twitter' />
          </p>

          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </header>
    </div>
  );
}
}

export default App;
