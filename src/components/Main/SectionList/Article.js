import { memo, useContext, useState } from 'react';

import { StoreContext } from '../../../store/StoreProvider';

import eliminar from '../../../assets/delete.png';
import editar from '../../../assets/editar.png';
import nohecho from '../../../assets/nohecho.png';
import hecho from '../../../assets/hecho.png';

export const Article = memo(({ cheked, content }) => {
	const [, dispatch] = useContext(StoreContext);

	const eliminarTarea = () => {
		dispatch({
			type: 'eliminar',
			payload: {
				content,
			},
		});
	};

	const editarTarea = () => {
		dispatch({
			type: 'editar',
			payload: {
				content: 'Lavar la loza',
			},
		});
	};

	const finalizarTarea = () => {
		if (!cheked) {
			dispatch({
				type: 'finalizar',
				payload: {
					content,
					cheked: true,
				},
			});
		}
	};

	return (
		<article className="article">
			<button className="article_button" onClick={finalizarTarea}>
				<img src={cheked ? hecho : nohecho} alt="estado" />
			</button>

			<h4>{content}</h4>

			<div className="article_edit">
				<button className="article_button" onClick={eliminarTarea}>
					<img src={eliminar} alt="eliminar" />
				</button>

				{!cheked && (
					<button className="article_button">
						<img src={editar} alt="editar" />
					</button>
				)}
			</div>
		</article>
	);
});
