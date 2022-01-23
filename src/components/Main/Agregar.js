import { useContext, useState } from 'react';
import Modal from 'react-modal';

import { StoreContext } from '../../store/StoreProvider';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '500px',
		height: '500px',
	},
};

Modal.setAppElement('#root');

export const Agregar = () => {
	const [, dispatch] = useContext(StoreContext);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [value, setValue] = useState('');

	const añadirTarea = () => {
		setValue('');
		dispatch({
			type: 'añadir',
			payload: {
				content: value,
			},
		});
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div className="main-div">
			<button
				className="main-div_button"
				onClick={() => {
					setModalIsOpen(true);
				}}
			>
				Añadir tarea
			</button>
			<button className="main-div_button">Agregar frases de gatos</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div>
					<label htmlFor="añadir">Agrega una tarea</label>
					<textarea
						id="añadir"
						className="modal-input"
						type="text"
						value={value}
						onChange={({ target }) => {
							setValue(target.value);
						}}
					/>

					<button
						className="main-div_button"
						onClick={() => {
							closeModal();
							añadirTarea();
						}}
					>
						<h4>Añadir</h4>
					</button>
					<button className="main-div_button" onClick={closeModal}>
						<h4>Regresar</h4>
					</button>
				</div>
			</Modal>
		</div>
	);
};
