import React, { useEffect, useState } from 'react'
import './effect.css'
import { Mensaje } from './Mensaje';

export const SimpleForm = () => {

  const [formulario, setFormulario] = useState(
    {
      nombre: '',
      email: ''
    }
  )

  const { nombre, email } = formulario;

  const handleInputChange = ({ target }) => {
/*     console.log(target.name);
    console.log(target.value); */
    setFormulario({
      ...formulario,
      [target.name]: target.value

    })
  }

  useEffect(() => {
    console.log('PRIMER EFECTO!')
  }, [])

  useEffect(() => {
    console.log('El formulario completo cambió')
  }, [formulario])

  useEffect(() => {
    console.log('El email del formulario cambió')
  }, [email])

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='nombre'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='algo@algo.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {nombre === '123' && <Mensaje />}
    </>
  )
}