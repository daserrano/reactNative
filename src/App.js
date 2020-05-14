import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class Box extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #FFF', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes =  {
    author: PropTypes.string.isRequired
  }
  render() {
    const { author, children, date, title} = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h4>Children props</h4>
        <Article
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será
          enviado al componente como this.props.children</p>
          <strong>Y mantiene las etiquetas y componentes que haya
          añadido dentro</strong>
        </Article>
      </header>
    </div>
  );
}
}

export default App;
