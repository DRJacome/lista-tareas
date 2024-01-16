import React, { useMemo, useState } from 'react'
import '../02-useEffect/effect.css'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {
  const { state: counter, incrementar } = useCounter(5000);
  const [mostrar, setMostrar] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Contador: <small>{counter}</small></h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className='btn btn-primary' onClick={incrementar}>+1</button>

      {/* Los valores booleanos no se pueden renderizar en pantalla, por lo que se 
      * deben convertir a string con JSON.stringify(). */}
      <button className='btn btn-primary ml-3' onClick={() => setMostrar(!mostrar)}>Mostrar {JSON.stringify(mostrar)}</button>
    </div>
  )
}