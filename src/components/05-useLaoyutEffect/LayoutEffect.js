import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

  const { state: counter, incrementar } = useCounter(1);
  console.log(counter);

  const { data } = useFetch(`https://www.boredapi.com/api/activity/?participants=${counter}`)

  const { activity } = !!data && data;

  const parrafo = useRef()
  const [tamañoCaja, setTamañoCaja] = useState({})

  useLayoutEffect(() => {
    /* Método para obtener las medidas de una caja del DOM */
    setTamañoCaja(parrafo.current.getBoundingClientRect());
  }, [activity])

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p className='mb-0' ref={parrafo}>{activity}</p>
      </blockquote>

      <pre>
        {JSON.stringify(tamañoCaja, null, 3)}
      </pre>

      <button className='btn btn-primary' onClick={incrementar}>Cambiar frase</button>
    </>
  )
}