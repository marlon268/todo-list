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
		height: '400px',
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
	title,
}) => {
	const handleTexArea = ({ target }) => {
		setValue(target.value);
	};

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={500}
		>
			<div>
				<label htmlFor="añadir">{title}</label>
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
					<h4>Salir</h4>
				</button>
			</div>
		</Modal>
	);
};
