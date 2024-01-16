import React from 'react'
import PropTypes from 'prop-types'
import { ListaTareasItem } from './ListaTareasItem'

export const ListaTareas = ({ tareas, gestionarBorrado, gestionarTachado }) => {
  return (
    <ul className='list-group list-group-flush'>
      {tareas.map((tarea, index) => (
        /* ListaTareasItem | Requisitos: tareas, index, funciones gestionarTachado, gestionarBorrado */
        <ListaTareasItem
          key={tarea.id}
          tarea={tarea}
          index={index}
          gestionarBorrado={gestionarBorrado}
          gestionarTachado={gestionarTachado}
        />
      ))
      }
    </ul>
  )
}
ListaTareas.propTypes = {
  tareas: PropTypes.array.isRequired,
  gestionarBorrado: PropTypes.func.isRequired,
  gestionarTachado: PropTypes.func.isRequired
}
