import { useEffect, useState } from "react";

export const Mensaje = () => {
  const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 })
  const { x, y } = coordenadas

  useEffect(() => {

    const moverMouse = (e) => {
      //console.log(e);
      const coordenadasMouse = { x: e.x, y: e.y }
      /*  console.log(coordenadasMouse); */
      setCoordenadas(coordenadasMouse)
    }

    window.addEventListener('mousemove', moverMouse)

    console.log('Componente montado');

    return () => {
      /*  console.log('Componente desmontado'); */
      window.removeEventListener('mousemove', moverMouse)
    }
  }, [])

  return (
    <>
      <h1>Esto es un mensaje</h1>
      <p>Coordenada X: {x}, coordenada Y: {y}</p>
    </>
  )
}