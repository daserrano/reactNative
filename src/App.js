import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchExample from './sections/fetch-example.js'

class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <FetchExample/>
      </header>
    </div>
  );
}
}

export default App;
