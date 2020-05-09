import React, { Component } from 'react';
import ConditionalSection from './sections/conditional';
import logo from './logo.svg';
import './App.css';

// class Contador extends Component {
//   constructor() {
//     super()
//     this.state = { contador: 1}
//     setInterval(() => {
//       this.setState({contador: this.state.contador + 1 })
//     }, 1000)
//   }
//
//   render() {
//     return <ContadorNumero numero={this.state.contador} />
//   }
// }
//
// class ContadorNumero extends Component {
//   render () {
//     return <div>
//           <h2>{this.props.numero}</h2>
//       </div>
//   }
// }
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div className="App"></div>
//       </header>
//
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConditionalSection/>
      </header>
    </div>
  );
}

export default App;
