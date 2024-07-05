import { FormEvent, useEffect, useRef, useState } from "react"


export const Refs: React.FC = () => {
  //const ref = useRef(0) // { current: 0 }
  //const [toggle, setToggle] = useState(false)

  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputEmailRef = useRef<HTMLInputElement>(null)
  const inputPasswordRef = useRef<HTMLInputElement>(null)

  // function handleClickOnButton() {
  //   ref.current = ref.current + 1
  //   console.log(ref)
  // }
  
  // useEffect(() => {
  //   console.log(inputRef)
  // },[inputRef])

  // function handleClickOnButton() {
  //   if(inputNameRef.current){
  //     inputNameRef.current.focus()
  //   }
  // }

  function handleOnSubmint(event: FormEvent) {
    event.preventDefault()
    console.log("Submeteu...")
    console.log(inputNameRef.current?.value)
    console.log(inputEmailRef.current?.value)
    console.log(inputPasswordRef.current?.value)
  }

  return (
    <form style={{ padding: '2rem'}} onSubmit={event => handleOnSubmint(event)}>
      <h1>useRef</h1>
      <br/>
      <input type="text" placeholder="Nome completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputPasswordRef} />
      <button type="submit">Submeter</button>
      
      {/* <button onClick={handleClickOnButton}>Foca no input</button> */}
      
      {/* <p>{`Valor da ref é: ${ref.current}`}</p> */}
      {/* <br />
      <button onClick={handleClickOnButton}>Increment</button>
      <br />
      <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </form>
  )
}