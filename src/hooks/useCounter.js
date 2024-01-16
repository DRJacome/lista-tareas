import { useState } from "react"

export const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState)

  const reset = () => {
    setCounter(initialState)
  }

  const incrementar = () => {
      setCounter(counter + 1)
  }
  const decrementar = () => {
    setCounter(counter - 1)
  }

  return {
    state: counter,
    incrementar,
    decrementar,
    reset
  }
}