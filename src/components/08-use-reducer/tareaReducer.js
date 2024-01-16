export const tareaReducer = (state = [], action) => {

  switch (action.type) {
    /* En este case "agregar" se devuelve el mismo array con el operador
    * de propagación y se le agrega una nueva entrada. */
    case 'agregar':
      return [...state, action.payload];
    /* En este case "borrar" se devuelve un nuevo array,
    * por eso no se debe usar el operador de propagación. */
    case 'borrar':
      return state.filter(tarea => tarea.id !== action.payload);
    case 'tachado':
      return state.map(tarea =>
        (tarea.id === action.payload)
          ? { ...tarea, hecho: !tarea.hecho }
          : tarea
      );

    /* return state.map(tarea => {
      if (tarea.id === action.payload) {
        return {
          ...tarea,
          hecho: !tarea.hecho
        }
      } else {
        return tarea
      }
    }) */
    default:
      return state;
  }
}