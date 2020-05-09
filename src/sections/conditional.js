import React, { Component} from 'react'

class ComponenteA extends Component {
  render() {
    return <p>Componente A</p>
  }
}

class ComponenteB extends Component {
  render() {
    return <p>Componente B</p>
  }
}

function useConditionalRendering(mostrarA) {
  if (mostrarA) {
    return <ComponenteA/>
  }
  return <ComponenteB/>
}

export default class ConditionalSection extends Component {

  constructor()  {
    super()
    this.state = {mostrarA: true}
  }
  render() {
    return (
      <div>
        <h4> Renderizado condicional </h4>
        {useConditionalRendering(this.state.mostrarA)}
      </div>
    )
  }
}
