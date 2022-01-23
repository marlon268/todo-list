import search from '../../assets/search.png';

export const Input = () => {
	return (
		<div className="main-input">
			<input type="text" placeholder="Buscar tarea/s" />
			<button>
				<img src={search} alt="search" />
			</button>
		</div>
	);
};
