import { memo } from 'react';

import eliminar from '../../../assets/delete.png';
import editar from '../../../assets/editar.png';
import nohecho from '../../../assets/nohecho.png';
import hecho from '../../../assets/hecho.png';

export const Article = memo(({ cheked }) => {
	return (
		<article className="article">
			<button className="article_button">
				<img src={cheked ? hecho : nohecho} />
			</button>

			<h4>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</h4>
			<div className="article_edit">
				<button className="article_button">
					<img src={eliminar} />
				</button>
				<button className="article_button">
					<img src={editar} />
				</button>
			</div>
		</article>
	);
});
