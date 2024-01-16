import React from 'react'
import PropTypes from 'prop-types'

export const MostrarIncremento = React.memo(({ incrementar }) => {

  console.log('Me volví a generar');
  return (
    <button className='btn btn-primary' onClick={() => { incrementar(5) }}>Incrementar</button>
  )
})

MostrarIncremento.propTypes = {
  incrementar: PropTypes.func.isRequired
}