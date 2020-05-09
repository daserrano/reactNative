import React, { Component} from 'react'

class LogginButton extends Component {
  render() {
    return <button>Iniciar sesión </button>
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Bienvenido, usuario!</p>
        <button>Cerrar sesión</button>
      </div>
    )
  }
}

export default class ConditionalSection extends Component {

  constructor()  {
    super()
    this.state = {isUserLogged: false}
  }
  render() {

    return (
      <div>
        <h4> Renderizado condicional </h4>
        {this.state.isUserLogged ? <LogoutButton/> : <LogginButton/>}
      </div>
    )
  }
}
