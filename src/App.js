import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cars from './data/cars.json'

class CarItem extends Component {
  render() {
    const {car} = this.props

    return (
      <li key={car.id}>
        <p><strong>Marca: </strong>{car.company}</p>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Motor: </strong>{car.engine}</p>
      </li>
    )
  }
}

class App extends Component {
    render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Trabajando con listas con objetos</h4>
        <ul>
          {
            cars.map(car => {
              return <CarItem key={car.id} car={car}/>
            })
          }
        </ul>
      </header>
    </div>
  );
}
}

export default App;
