import { types } from './types';

const initialStore = {
	tareasPendientes: [
		{ content: 'Realizar compras del supermercado', cheked: false },
		{
			content:
				'Terminar los proyectos de la universidad de la clase de matematicas',
			cheked: false,
		},
	],
	tareasTerminadas: [
		{
			content:
				'Realizar los proyectos de la Universidad de la clase de ingenieria',
			cheked: true,
		},
	],
};

const storeReducer = (state, action) => {
	switch (action.type) {
		case types.añadir:
			return {
				...state,
				tareasPendientes: [...state.tareasPendientes, action.payload],
			};

		case types.añadirGatos:
			return {
				...state,
				tareasPendientes: [...state.tareasPendientes, ...action.payload],
			};

		case types.eliminar:
			return {
				...state,
				tareasPendientes: state.tareasPendientes.filter(
					(tarea) => tarea.content !== action.payload.content
				),

				tareasTerminadas: state.tareasTerminadas.filter(
					(tarea) => tarea.content !== action.payload.content
				),
			};

		case types.finalizar:
			return {
				...state,
				tareasPendientes: state.tareasPendientes.filter(
					(tarea) => tarea.content !== action.payload.content
				),
				tareasTerminadas: [...state.tareasTerminadas, action.payload],
			};

		case types.editar:
			return {
				...state,
				tareasPendientes: state.tareasPendientes.map((tarea) => {
					if (tarea.content === action.payload.content) {
						tarea.content = action.payload.newValue;
						return tarea;
					} else {
						return tarea;
					}
				}),
			};
		default:
			return state;
	}
};

export { initialStore };
export default storeReducer;
