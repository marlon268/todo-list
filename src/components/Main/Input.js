import search from '../../assets/search.png';

export const Input = ({ value, setInput }) => {
	const hanleInput = ({ target }) => {
		setInput(target.value);
	};
	return (
		<div className="main-input">
			<input
				type="text"
				placeholder="Buscar tarea/s pendientes"
				value={value}
				onChange={hanleInput}
			/>
			<button>
				<img src={search} alt="search" />
			</button>
		</div>
	);
};
