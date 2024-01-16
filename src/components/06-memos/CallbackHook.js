import React, { useCallback, useEffect, useState } from 'react'
import { MostrarIncremento } from './MostrarIncremento'
import '../02-useEffect/effect.css'

export const CallbackHook = () => {

  const [contador, setContador] = useState(10)

  /*   const incrementar = () => {
      setContador(contador + 1)
    } */

  const incrementar = useCallback(
    (num) => {
      setContador(c => c + num)
    },
    [setContador],
  )

  useEffect(() => {
    //Código.
  }, [incrementar])


  return (
    <div>
      <h1>UseCallback Hook: {contador}</h1>
      <hr />
      <MostrarIncremento incrementar={incrementar} />
    </div>
  )
}