import React, { useEffect, useReducer } from 'react'
import { tareaReducer } from './tareaReducer'
import { ListaTareas } from './components/ListaTareas'
import { AgregarTarea } from './AgregarTarea'
import './estilos.css'


const init = () => {
    /* Si el localStorage contiene algo, traelo; si no, devuelve un array vacío. */
    return JSON.parse(localStorage.getItem('tareas')) || [];
    /*     return [{
            id: new Date().getTime(),
            descripcion: "Aprender React",
            hecho: false
        }] */
}

export const TareasApp = () => {
    const [tareas, dispatch] = useReducer(tareaReducer, [], init)

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas])

    const gestionarBorrado = (idTarea) => {
        const accionBorrar = {
            type: 'borrar',
            payload: idTarea
        }
        dispatch(accionBorrar)
    }

    const gestionarTachado = (idTarea) => {
        dispatch({
            type: 'tachado',
            payload: idTarea
        })
    }

    const gestionarAgregarTarea = (nuevaTarea) => {
        dispatch({
            type: 'agregar',
            payload: nuevaTarea
        })
    }

    return (
        <div>
            <h1>Lista de tareas pendientes (<small>{tareas.length}</small>)</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    {/* Componente ListaTAreas | Requisitos: tareas, funciones gestionarTachado, gestionarBorrado */}
                    <ListaTareas tareas={tareas} gestionarBorrado={gestionarBorrado} gestionarTachado={gestionarTachado} />
                </div>
                <div className='col-5'>
                    <AgregarTarea gestionarAgregarTarea={gestionarAgregarTarea} />
                </div>
            </div>
        </div>
    )
}

