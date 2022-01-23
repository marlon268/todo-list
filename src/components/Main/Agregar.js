import { useContext } from 'react';

import { StoreContext } from '../../store/StoreProvider';
import { MyModal } from '../Modals/MyModal';
import { useModal } from '../../hooks/useModal';
import { añadirTarea } from '../../store/actionStore';
import { MyModalGatos } from '../Modals/MyModalGatos';

export const Agregar = () => {
	const [, dispatch] = useContext(StoreContext);

	const { closeModal, modalIsOpen, setModalIsOpen, setValue, value } =
		useModal('');

	const {
		closeModal: closeModalGatos,
		modalIsOpen: modalIsOpenGatos,
		setModalIsOpen: setModalIsOpenGatos,
	} = useModal('');

	const handleTarea = () => {
		setValue('');
		dispatch(añadirTarea(value));
	};

	const handleModal = () => {
		setModalIsOpen(true);
	};

	const handleModalGatos = () => {
		setModalIsOpenGatos(true);
	};

	return (
		<div className="main-div">
			<button className="main-div_button" onClick={handleModal}>
				Añadir tarea
			</button>
			<button className="main-div_button" onClick={handleModalGatos}>
				Agregar frases de gatos
			</button>
			<MyModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				value={value}
				setValue={setValue}
				tare={handleTarea}
				type="Agregar"
			/>

			<MyModalGatos
				modalIsOpen={modalIsOpenGatos}
				closeModal={closeModalGatos}
			/>
		</div>
	);
};
