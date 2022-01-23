import { useContext } from 'react';

import { Header } from './components/Header';
import Main from './components/Main';
import { Input } from './components/Main/Input';
import { Agregar } from './components/Main/Agregar';
import SectionList from './components/Main/SectionList';
import { Article } from './components/Main/SectionList/Article';
import { StoreContext } from './store/StoreProvider';

function App() {
	const [store] = useContext(StoreContext);

	return (
		<div className="todo-list">
			<Header />
			<Main>
				<Input />
				<Agregar />

				<div className="todo-list_content">
					<SectionList title="Tareas pendientes">
						{store.tareasPendientes.map((item, index) => (
							<Article key={index} {...item} />
						))}
					</SectionList>

					<SectionList title="Tareas terminadas">
						{store.tareasTerminadas.map((item, index) => (
							<Article key={index} {...item} />
						))}
					</SectionList>
				</div>
			</Main>
		</div>
	);
}

export default App;
