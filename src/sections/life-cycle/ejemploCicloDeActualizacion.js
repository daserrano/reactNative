import React, {Component} from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd',
  panda: 'https://goo.gl/oNbtoq'
}

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal]}

  componentWillReceiveProps(nextProps) {
    //Entrara en este metodo siempre que actualicemos las props
    // aunque sea el mismo valor, va a entrar aqui.
    console.log('componentWillReceiveProps')
    console.log(nextProps)
    this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
  }

  render() {
    console.log('-> render')
    return (
      <div>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
  animal: 'dolphin'
}

class EjemploDeCicloDeActualizacion extends Component {
  state = {animal: 'panda'}

  render() {
    return (
      <div>
        <h4> Ciclo de actualización. ComponentWillReceiveProps </h4>
        <button onClick={() => this.setState({animal: 'panda'})}>
          Panda
        </button>
        <button onClick={() => this.setState({animal: 'cat'})}>
          Cat
        </button>
        <button onClick={() => this.setState({animal: 'dolphin'})}>
          Dolphin
        </button>
        <AnimalImage animal={this.state.animal}/>
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion
