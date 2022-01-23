const initialStore = {
	tareasPendientes: [
		{ content: 'Comprar pastel', cheked: false },
		{ content: 'Comer merienda', cheked: false },
	],
	tareasTerminadas: [{ content: 'Lavar la ropa', cheked: true }],
};

const storeReducer = (state, action) => {
	switch (action.type) {
		case 'añadir':
			return {
				...state,
				tareasPendientes: [...state.tareasPendientes, action.payload],
			};

		case 'eliminar':
			return {
				...state,
				tareasPendientes: state.tareasPendientes.filter(
					(tarea) => tarea.content !== action.payload.content
				),

				tareasTerminadas: state.tareasTerminadas.filter(
					(tarea) => tarea.content !== action.payload.content
				),
			};

		case 'finalizar':
			return {
				...state,
				tareasPendientes: state.tareasPendientes.filter(
					(tarea) => tarea.content !== action.payload.content
				),
				tareasTerminadas: [...state.tareasTerminadas, action.payload],
			};

		case 'editar':
			return {
				...state,
				tareasPendientes: state.tareasPendientes.map((tarea) =>
					tarea.content === action.payload.content ? action.payload : tarea
				),
			};
		default:
			return state;
	}
};

export { initialStore };
export default storeReducer;
