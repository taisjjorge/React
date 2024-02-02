import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. Construindo a classe Counter...")
    
    this.state = {
      count: 0,
    }
  }

  // UNSAFE_ método depreciado do react
  UNSAFE_componentWillMount() {
    console.log("2. Componente Counter será montado")
  }

  componentDidMount() {
    console.log("4. Componente Counter foi montado ")

    // quando o componente for desmontado, tem que garantir a remoção do evento tb
    document.addEventListener('scroll', this.consoleScroll)
  }

  UNSAFE_componentWillUpdate() {
    console.log("5. Componente Counter será atualizado")
  }

  componentDidUpdate() {
    console.log("6. Componente Counter foi atualizado")
  }

  // chamado sempre que uma prop/estado for atualizado
  // só atualiza se retornar true
  shouldComponentUpdate() {
    console.log("7. Devo atualizar o componente Counter?")
    //if (this.state.count === 2) { return false }
    return true
  }

  // único método de desmontagem
  componentWillUnmount() {
    console.log("8. Componente Counter será desmontado...")

    document.removeEventListener('scroll', this.consoleScroll)
  }

  // funcao criada para ser chamada no evento de scroll
  // necessário passar a mesma referencia para o addEventListener/removeEventListener
  consoleScroll(){
    console.log("Rolando a página")
  }


  render() {
    console.log("3. Renderizando o componente Counter...")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrement
        </button>
      </div>
    )
  }
}