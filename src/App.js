import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const email = this.inputTwitter.value
    console.log({name, email});
  }

  handleChange = (e) => {
    console.log('handleChange')
    console.log(e.target.checked)
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
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

          <p>
            <label>
              <input
              type='checkbox'
              onChange={this.handleChange}/>
              Accepted terms
            </label>
          </p>
          <button>Enviar</button>
        </form>
      </header>
    </div>
  );
}
}

export default App;
