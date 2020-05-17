import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent {
  state = { src: ANIMAL_IMAGES[this.props.animal]}

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
    this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
  }

  //PureComponent devuelve false en caso de que no se detecten cambios
  //en el state o en las props.
  //Esto no aplica a si contienen objetos, puede devolver falsos positivos.

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
