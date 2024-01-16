import React from 'react'
import PropTypes from 'prop-types'

export const ListaTareasItem = ({ tarea, index, gestionarBorrado, gestionarTachado }) => {
  return (
    <li key={tarea.id} className='list-group-item'>
      <p
        className={`${tarea.hecho && 'completada'}`}
        onClick={() => gestionarTachado(tarea.id)}
      >{index + 1} - {tarea.descripcion}
      </p>
      <button className='btn btn-danger' onClick={() => gestionarBorrado(tarea.id)}>Borrar</button>
    </li>
  )
}

ListaTareasItem.propTypes = {
  tarea: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  gestionarBorrado: PropTypes.func.isRequired,
  gestionarTachado: PropTypes.func.isRequired
}