import { useCallback, useMemo, useState } from "react"

interface MemoizationProps {
  financialData: {
    incomes: number[],
    outcomes: number[],
  }
}


export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  const [showValues, setShowValues] = useState(true)

  // const totalIncomes = financialData.incomes.reduce((total, income) => {
  //   console.log('Executou a função de cálculo de entradas')
  //   return total += income
  // }, 0)

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log('Executou a função de cálculo de entradas')
      return total += income
    }, 0)
  }, [financialData.incomes])

  const totalOutcomes = financialData.outcomes.reduce((total, outcome) => {
    console.log('Executou a função de cálculo de saídas')
    return total += outcome
  }, 0)
  
  //console.log('Renderizou o componente')
  
  
  // como essa funcao nao depende de variavel 
  // nenhuma, apenas dos parametros que eu vou passar
  // quando executar ela, ela não precisa ser recriada
  // um caso de useCallback
  // function soma(desconto: number) {
  //   console.log(totalOutcomes * (1 - desconto))
  // }

  // só será recriada se o totalOutcomes mudar*
  const aplicarDesconto = useCallback((desconto: number) => {
    return totalOutcomes * (1 - desconto)
  }, [totalOutcomes])

  return (
    <div style={{ padding: '2rem'}}>
      <h1>Memoization</h1>

      <h2>useMemo</h2>
      
      <p>Total de entradas: {showValues ? totalIncomes: '****'}</p>
      <br />
      <p>Total de saídas: {showValues? totalOutcomes : '****'}</p>
      <br /><br />

      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? 'Ocultar valores' : 'Mostrar valores'}
      </button>
    </div>
  )
}