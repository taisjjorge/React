import React from "react";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showCounter: false,
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
        
      </div>
    );
  }
}

export default App;
