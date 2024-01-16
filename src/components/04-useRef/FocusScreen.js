import { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
    console.log(inputRef);
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input className='form-control' placeholder='Nombre' ref={inputRef} />

      <button className='btn btn-outline-primary mt-5' onClick={handleClick}>Focus</button>
    </>
  )
}