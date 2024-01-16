import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
  const { state, incrementar, decrementar, reset } = useCounter(100)
  return (
    <>
      <h1>Contador con hook: {state}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => incrementar(2)}>+1</button>
      <button className="btn btn-primary" onClick={() => decrementar(2)}>-1</button>
      <button className="btn btn-secondary" onClick={() => reset()}>Reset</button>
    </>
  )
}
export default CounterWithCustomHook