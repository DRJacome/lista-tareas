import React, { useState } from 'react'
import '../02-useEffect/effect.css'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {
  const { state: counter, incrementar } = useCounter(10)
  const [mostrar, setMostrar] = useState(true)
  return (
    <div>
      <h1>Memorize</h1>
      <h1>Contador: <Small value={counter} /></h1>
      <hr />
      <button className='btn btn-primary' onClick={incrementar}>+1</button>

      {/* Los valores booleanos no se pueden renderizar en pantalla, por lo que se 
      * deben convertir a string con JSON.stringify(). */}
      <button className='btn btn-primary ml-3' onClick={() => setMostrar(!mostrar)}>Mostrar {JSON.stringify(mostrar)}</button>
    </div>
  )
}