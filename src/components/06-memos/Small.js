import React from 'react'
/* import React, { memo } from 'react' */

/* export const Small = ({ value }) => {
  console.log('Me volví a mostrar');
  return (
    <small>{value}</small>
  )
} */

/* La función "React.memo" o "memo" es una forma de prevenir que un componente se vuelva a renderizar si sus
* propiedades son las mismas al momento de la siguiente llamada al componente.
*/
export const Small = React.memo(
  ({ value }) => {
    console.log('Me volví a mostrar');
    return (
      <small>{value}</small>
    )
  }
)