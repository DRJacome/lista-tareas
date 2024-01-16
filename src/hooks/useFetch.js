import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [estado, setEstado] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setEstado({ data: null, loading: true, error: null })
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        if (isMounted) {
          setTimeout(() => {
            setEstado({
              loading: false,
              error: null,
              data
            });
          }, 1000);
        } else {
          console.log('setState() no se llamó');
        }
      })
      .catch(error => {
        setEstado({
          loading: false,
          error,
          data: null
        })
      });
  }, [url])

  return estado;
}
