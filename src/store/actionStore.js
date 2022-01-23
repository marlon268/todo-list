import { types } from './types';

export const añadirTarea = (content) => ({
	type: types.añadir,
	payload: {
		content,
		cheked: false,
	},
});

export const añadirGatos = (frasesGatos) => ({
	type: types.añadirGatos,
	payload: frasesGatos,
});

export const eliminarTarea = (content) => ({
	type: types.eliminar,
	payload: {
		content,
	},
});

export const editarTarea = (content, newValue) => ({
	type: types.editar,
	payload: {
		content,
		cheked: false,
		newValue,
	},
});

export const finalizarTarea = (content) => ({
	type: types.finalizar,
	payload: {
		content,
		cheked: true,
	},
});
