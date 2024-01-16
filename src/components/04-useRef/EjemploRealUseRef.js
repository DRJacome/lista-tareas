import React, { useState } from 'react'
import '../02-useEffect/effect.css'
import { MultipleCustomHooks } from '../03-ejemplos/MultipleCustomHooks'

export const EjemploRealUseRef = () => {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div>
      <h1>UseRef</h1>
      <hr />
      {mostrar && <MultipleCustomHooks />}
      <button
        className='btn btn-primary m-5'
        onClick={() => { setMostrar(!mostrar) }}>Mostrar/ocultar</button>
    </div>
  )
}