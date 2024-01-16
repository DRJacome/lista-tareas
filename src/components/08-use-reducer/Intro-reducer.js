import '../02-useEffect/effect.css'

const estadoInicial = [{
  id: 1,
  tareas: 'Comprar pan',
  hecho: false
}];

/* Una función useReducer es una función normal y corriente a la que se le pasan dos parámetros:
* un parámetro "state", que es el estado inicial; y un parámetro action, que es el proceso que realizará
* la función useReducer.
* El useReducer se usa para poder cambiar correctamente el estado de la app, puesto que el estado 
* no se puede modificar directamente (por ejemplo con estadoInicial.push()).
* NOTA: un useReducer siempre debe devolver un nuevo estado.
*/
const toDoReducer = (state = estadoInicial, action) => {
  /* En "(action?.type === 'agregar')", la interrogación es el operador de encadenamiento opcional,
  * y significa "Comprueba si "action" tiene algún valor; si es así, haz X; si no, no hagas nada".
  * Se usa para evitar errores si la propiedad o método al que se accede es "null" o "undefined".
  */
  if (action?.type === 'agregar') {
    return [...estadoInicial, action.payload]
  }
  return state;
}

let tareas = toDoReducer();

const nuevaTarea = {
  id: 2,
  tareas: 'Comprar leche',
  hecho: false
}

/* Para que eluseReducer pueda modificar un estado, se debe crear un objeto estándar 
* llamado 'action' y definir el tipo de acción a realizar con la propiedad"type";
* el nombre del "type" puede ser cualquiera, (pero por convención se pone uno que defina la operación).
* Adicionalmente se puede incluir otra propiedad llamada "payload" (aunque se puede poner cualquier nombre,
* por convneción se denomina a esta propiedad "payload") con información adicional 
* se que pasa junto al tipo de action para especificar cómo el useReducer debe realizar la acción.
*/
const accionAgregarTarea = {
  type: 'agregar',
  payload: nuevaTarea
}

tareas = toDoReducer(tareas, accionAgregarTarea)

console.log(tareas);