import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: '',
      password: '',
    };
  }

  render() {
    return (
      <div style={{ marginTop: 20, marginLeft: 20 }}>
        <h1>{this.state.counter}</h1>

        <div>
          <button 
            onClick={() => this.setState({ counter: this.state.counter -1 })}
          >
            Diminuir
          </button>
          <button
            onClick={() => this.setState({ counter: this.state.counter +1 })}
          >
            Aumentar
          </button>
        </div>

        <form style={{ marginTop: 40 }}>
          <input 
            type="text"
            placeholder="nome"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value })
            }}
           />
          <input 
            type="password" 
            placeholder="senha" 
            value={this.state.password} 
            onChange={(event) => {
              this.setState({ password: event.target.value })
            }}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              console.log(this.state.name, this.state.password);
            }}
          >
            Enviar
          </button>
        </form>
      </div>

    )
    
  }
}
