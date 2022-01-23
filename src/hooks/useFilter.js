import { useEffect, useState } from 'react';

export const useFilter = (store) => {
	const [input, setInput] = useState('');
	const [search, setSearch] = useState([]);

	useEffect(() => {
		setSearch(
			store.tareasPendientes.filter((item) => {
				return item.content.toLowerCase().includes(input.toLowerCase());
			})
		);
	}, [store, input]);

	return { input, search, setInput, setSearch };
};
