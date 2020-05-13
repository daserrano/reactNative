import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  handleChange = (e) => {
    console.log('handleChange')
    console.log(e.target.checked)
    this.setState({inputTerms: e.target.checked})
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
              value={this.state.inputName}
              onChange={e => this.setState({inputName: e.target.value})}/>
          </p>

          <p>
            <label>Twitter: </label>
            <input
              id='twitter'
              name='twitterAccount'
              placeholder='Introduce tu Twitter'
              value={this.state.inputTwitter}
              onChange={e => this.setState({inputTwitter: e.target.value})}/>
          </p>

          <p>
            <label>
              <input
              type='checkbox'
              onChange={this.handleChange}
              checked={this.state.inputTerms}/>
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
