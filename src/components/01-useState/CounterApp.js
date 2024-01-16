import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {
  const [contador, setContador] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  })

  const { counter1, counter2 } = contador;
  return (
    <>
      {/* <h1>Contador {counter}</h1> */}
      <h1>Contador 1: {counter1}</h1>
      <h1>Contador 2: {counter2}</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => {
        setContador({
          ...contador,
          counter1: counter1 + 1,
        }
        )
      }}>
        +1
      </button >
    </>
  )
}
