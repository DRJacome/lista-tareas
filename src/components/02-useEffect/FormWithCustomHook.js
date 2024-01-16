import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css'

export const FormWithCustomHook = () => {
  const [valoresFormulario, handleInputChange] = useForm(
    {
      nombre: '',
      email: '',
      password: ''
    }
  )
  /* Desestructuración de propiedades del useState para acceder directamente a ellos. */
  const { nombre, email, password } = valoresFormulario;

  useEffect(() => {
    console.log('Email cambió');
  }, [email])

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log(valoresFormulario);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulario con Custom Hook</h1>
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
      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*******'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>Enviar</button>
    </form>
  )
}