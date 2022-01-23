import { useContext, useRef } from 'react';
import Modal from 'react-modal';

import { añadirGatos } from '../../store/actionStore';
import { StoreContext } from '../../store/StoreProvider';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		height: '400px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

Modal.setAppElement('#root');

export const MyModalGatos = ({ modalIsOpen, closeModal }) => {
	const [, dispatch] = useContext(StoreContext);

	const select = useRef();
	const cantidad = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];

	const handleRef = () => {
		let value = select.current.value;

		fetch(`https://catfact.ninja/facts?max_length=60&limit=${value}`)
			.then((data) => data.json())
			.then((res) => {
				const frases = res.data.map((frase) => frase.fact);

				const gatosObj = frases.map((gato) => {
					return {
						content: gato,
						cheked: false,
					};
				});
				console.log(gatosObj);
				dispatch(añadirGatos(gatosObj));
			});

		closeModal();
	};

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
		>
			<h3>Frases de Gatos</h3>
			<h4>Selecciona la cantidad </h4>
			<select ref={select} name="gatos" size="4">
				{cantidad.map((item, index) => (
					<option key={index}>{item}</option>
				))}
			</select>
			<div>
				<button className="main-div_button" onClick={handleRef}>
					Agregar
				</button>
				<button className="main-div_button" onClick={closeModal}>
					Regresar
				</button>
			</div>
		</Modal>
	);
};
