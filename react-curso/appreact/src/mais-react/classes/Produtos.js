import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  componentDidMount() {
    console.log('Montou o componente');
  }

  componentDidUpdate() {
    console.log('Componente foi renderizado de volta');
  }

  componentWillUnmount() {
    console.log('Componente sendo desmontado');
  }

  render() {
    console.log('Renderizou');
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Quantidade: {this.state.contar}</p>
        <p>
          <button onClick={this.handleClick}>Adicionar</button>
        </p>
      </div>
    );
  }
}

export default Produtos;
