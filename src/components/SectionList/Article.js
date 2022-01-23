import { memo, useContext, useState } from 'react';

import { StoreContext } from '../../store/StoreProvider';

import eliminar from '../../assets/delete.png';
import editar from '../../assets/editar.png';
import nohecho from '../../assets/nohecho.png';
import hecho from '../../assets/hecho.png';
import {
	editarTarea,
	eliminarTarea,
	finalizarTarea,
} from '../../store/actionStore';

import { MyModal } from '../Modals/MyModal';
import { useModal } from '../../hooks/useModal';

export const Article = memo(({ cheked, content }) => {
	const [, dispatch] = useContext(StoreContext);
	const [animation, setAnimation] = useState(false);
	const { closeModal, modalIsOpen, setModalIsOpen, setValue, value } =
		useModal(content);

	const handleEliminarTarea = () => {
		setAnimation(true);
		setTimeout(() => {
			dispatch(eliminarTarea(content));
		}, 500);
	};

	const handleEditarTarea = () => {
		dispatch(editarTarea(content, value));
	};

	const handleFinalizarTarea = () => {
		if (!cheked) {
			setAnimation(true);
			setTimeout(() => {
				dispatch(finalizarTarea(value));
				setAnimation(false);
			}, 500);
		}
	};

	return (
		<article className={` ${animation ? 'animation-art' : 'article'} `}>
			<button className="article_button" onClick={handleFinalizarTarea}>
				<img src={cheked ? hecho : nohecho} alt="estado" />
			</button>

			<h4>{content}</h4>

			<div className="article_edit">
				<button className="article_button" onClick={handleEliminarTarea}>
					<img src={eliminar} alt="eliminar" />
				</button>

				{!cheked && (
					<button
						className="article_button"
						onClick={() => {
							setModalIsOpen(true);
						}}
					>
						<img src={editar} alt="editar" />
					</button>
				)}
			</div>
			<MyModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				value={value}
				setValue={setValue}
				setModalIsOpen={setModalIsOpen}
				tare={handleEditarTarea}
				type="Guardar"
				title="Edita el contenido de tu tarea"
			/>
		</article>
	);
});
