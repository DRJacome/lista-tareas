import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {

  const { state: counter, incrementar } = useCounter(1);
  console.log(counter);

  const { loading, data } = useFetch(`https://www.boredapi.com/api/activity/?participants=${counter}`)

  console.log(data);

  const { activity, type } = !!data && data;

  const capitalizarLetra = (palabra) => {
    return palabra.substring(0, 1).toUpperCase() + palabra.substring(1)
  }
  return (
    <>
      <h1>Consejos The Bored API</h1>
      <hr />

      {loading
        ? (
          <div className='alert alert-info text-center'>
            loading...
          </div>
        )
        : (
          <blockquote className='blockquote text-right'>
            <p className='mb-0'>{activity}</p>
            <footer className='blockquote-footer'>{capitalizarLetra(type)}</footer>
          </blockquote>
        )
      }
      <button className='btn btn-primary' onClick={incrementar}>Cambiar frase</button>
    </>
  )
}