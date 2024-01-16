import React from 'react'
import { useForm } from "../../hooks/useForm"

export const AgregarTarea = ({ gestionarAgregarTarea }) => {
  /* const [{valoresFormulario}, gestionarInput] = useForm({ */
  const [{ descripcion }, gestionarInput, reset] = useForm({
    descripcion: ''
  })

  const gestionarFormulario = (evento) => {
    evento.preventDefault();
    /* Si no se escribe nada en el campo input, 
    el programa no hará nada (no añadirá una nueva tarea) */
    if (descripcion.trim().length <= 1) {
      return null;
    }

    const nuevaTarea = {
      id: new Date().getTime(),
      descripcion: descripcion,
      hecho: false
    }

    gestionarAgregarTarea(nuevaTarea)
    reset()
  }

  return (
    <>
      <h4>Agregar tarea</h4>
      <hr />
      <form onSubmit={gestionarFormulario}>
        <div className='contenedor-input'>
          <input
            type='text'
            name='descripcion'
            className='form-control'
            placeholder='Escribe aquí lo que quieras apuntar'
            autoComplete='off'
            onChange={gestionarInput}
            value={descripcion}
          />
        </div>
        <button
          className='btn btn-outline-primary mt-1 btn-block boton-agregar'
          type='submit'
        >Agregar
        </button>
      </form>
    </>
  )
}