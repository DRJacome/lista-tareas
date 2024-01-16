import { useState } from "react"

export const useForm = (estadoInicial = {}) => {
  const [valores, setValores] = useState(estadoInicial);

  const reset = () => {
    setValores(estadoInicial)
  }

  const gestionarInput = ({ target }) => {
    setValores({
      ...valores,
      [target.name]: target.value
    })
  }

  return [valores, gestionarInput, reset]
}