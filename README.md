# To-Do list

Proyecto relizado con create-react-app y SASS

## ¿Como funciona?

Esta pagina web To-Do list esta construida con reactJS y SASS en los estilos,
para la parte de el modal, se utilizo react-modal una libreria bastante util para construir modales rapidos y escalables.
Para manejar el almacenamiento de las tareas se utilizo useReducer junto con useContext, para proveer toda la pagina de
un mismo estado con dos arrays con las tareas pendientes y las tareas terminadas.

### Esta pagina web permite

Ver una lista de tareas pendientes y una lista de tareas ya terminadas.
Permite editar una tarea, seleccionarla como tarea ya terminada y eliminarla.
Permite añadira una nueva tarea y añadir frases de gato de esta api https://catfact.ninja/ como tareas seleccionando la cantidad de 1 hasta 20 frases.
