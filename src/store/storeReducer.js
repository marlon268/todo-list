const initialStore = {
	tareasPendientes: [{ content: 'Comprar pastel', cheked: false }],
	tareasTerminadas: [{ content: 'Lavar la ropa', cheked: true }],
};

const storeReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export { initialStore };
export default storeReducer;
