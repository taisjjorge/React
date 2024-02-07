import React from "react";
import { Counter } from "./components/Counter/Counter";
import { AnotherOneCounter } from "./components/AnotherOneCounter/AnotherOneCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showCounter: false,
      showAnotherCounter: false,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Ciclo de vida</h1>

        <button 
          onClick={() => 
            this.setState({ showCounter: !this.state.showCounter })
          }
        >
          { this.state.showCounter ? "Ocultar" : "Mostrar"}
        </button>
        
        { this.state.showCounter && <Counter />}
       
        <button 
          style={{ marginTop: 20 }}
          onClick={() => 
            this.setState({ showAnotherCounter: !this.state.showAnotherCounter })
          }
        >
          { this.state.showAnotherCounter ? "Ocultar Another One Counter" : "Another One Counter"}
        </button>
            
        { this.state.showAnotherCounter && <AnotherOneCounter />}
      </div>
    );
  }
}

export default App;
