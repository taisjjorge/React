import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

import './styles/global.css'
import { Refs } from './components/Concepts/Refs';
import { Memoization } from './components/Concepts/Memoization';

function App() {
  // const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   console.log('Executa funcão de efeito')
  //   // componentWillUnmount => Clenaup Function
  //   return () => {
  //     console.log('Executa quando o componente for desmontado')
  //   }
  // }, [toggle])


  return (
    <>
      <Header />
      <Tasks />

      <Memoization financialData={{
        incomes: [50, 30, 20],
        outcomes: [5, 8, 4]
      }} />
      
      
      {/* <Refs /> */}
      {/* <button onClick={() => setToggle(!toggle)}>
        Toggle
      </button> */}
    </>
  );
}

export default App;
