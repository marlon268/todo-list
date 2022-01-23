import Modal from 'react-modal';

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

export const MyModal = ({
	modalIsOpen,
	closeModal,
	setValue,
	tare,
	value,
	type,
}) => {
	const handleTexArea = ({ target }) => {
		setValue(target.value);
	};

	return (
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
					onChange={handleTexArea}
				/>

				<button
					className="main-div_button"
					onClick={() => {
						closeModal();
						tare();
					}}
				>
					<h4>{type}</h4>
				</button>
				<button className="main-div_button" onClick={closeModal}>
					<h4>Regresar</h4>
				</button>
			</div>
		</Modal>
	);
};
