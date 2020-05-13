import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const email = this.inputTwitter.value
    console.log({name, email});
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Formularios</h4>
        <form>
          <p>
            <label htmlFor='name'>Nombre: </label>
            <input
              id='name'
              name='userName'
              placeholder='Introduce tu nombre'
              ref={inputElement => this.inputName = inputElement}/>
          </p>

          <p>
            <label>Twitter: </label>
            <input
              id='twitter'
              name='twitterAccount'
              placeholder='Introduce tu Twitter'
              ref={inputElement => this.inputTwitter = inputElement} />
          </p>

          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </header>
    </div>
  );
}
}

export default App;
