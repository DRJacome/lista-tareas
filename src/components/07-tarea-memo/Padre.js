import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../02-useEffect/effect.css'

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    /* 1. Para evitar que el componente se re-renderice, debemos integrar la función "incrementar"
    * en un "useCallback()" y pasarle como argumentos los valores con los que trabajar,
    * además de establecer como dependencia la función "setValor" del useState.
    * 
    * 2. En el componente Hijo debemos envolver el componente con React.memo para indicar que los valores
    * de los argumentos son los mismos/no han cambiado para evitar una nueva renderización.
     */

    /* const incrementar = (num) => {
        setValor(valor + num)
    } */

    const incrementar = useCallback(
        (num) => {
            /* En "setValor(v => v + num)" tomamos el valor anterior (v) y le sumamos el nuevo valor de num.
            * Es importante indicar que, a pesar de que React diferenciará internamente entre las dos variables,
            * se usó "v" en vez de "valor" para diferenciar entre la variable del State (línea 9) y 
            * la variable local del setValor de la línea 30.
            */
            setValor(v => v + num)
        },
        [setValor],
    )

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>
            <hr />
            {numeros.map(n => (
                <Hijo
                    key={n}
                    numero={n}
                    incrementar={incrementar}
                />
            ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
