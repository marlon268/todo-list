import { useState } from 'react';

export const useModal = (content) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [value, setValue] = useState(content);

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return { closeModal, modalIsOpen, setModalIsOpen, value, setValue };
};
