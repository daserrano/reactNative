import React, {Component} from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal]}

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
    this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
  }

  shouldComponentUpdate(nextProps) {
    console.log('2. shouldComponentUpdate')
    console.log('anterior:', this.props.animal)
    console.log('nuevo:', nextProps.animal)
    //Éste método devuelve un booleano
    //si este método no existe, devuelve un true por defecto
    //éste booleano indica si se hace un render del componente.
    return this.props.animal !== nextProps.animal;
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
  animal: PropTypes.oneOf(Object.keys(ANIMAL_IMAGES))
}

class EjemploDeCicloDeActualizacion extends Component {
  state = {animal: 'panda'}

  _renderAnimalButton = (animal) => {
    return (
      <button
        //disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({animal})}>
        {animal}
      </button>
    )
  }
  render() {
    return (
      <div>
        <h4> Ciclo de actualización. ShouldComponentUpdate </h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal}/>
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion
