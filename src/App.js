import { useContext } from 'react';

import { Header } from './components/Header';
import Main from './components/Main';
import { Input } from './components/Main/Input';
import { Agregar } from './components/Main/Agregar';
import SectionList from './components/SectionList';
import { Article } from './components/SectionList/Article';
import { StoreContext } from './store/StoreProvider';
import { useFilter } from './hooks/useFilter';

function App() {
	const [store] = useContext(StoreContext);
	const { input, search, setInput, setSearch } = useFilter(store);

	return (
		<div className="todo-list">
			<Header />
			<Main>
				<Input value={input} setInput={setInput} setSearch={setSearch} />
				<Agregar />

				<div className="todo-list_content">
					<SectionList title="Tareas pendientes">
						{search.map((item) => (
							<Article key={item.content} {...item} />
						))}
					</SectionList>

					<SectionList title="Tareas terminadas">
						{store.tareasTerminadas.map((item, index) => (
							<Article key={item.content} {...item} />
						))}
					</SectionList>
				</div>
			</Main>
		</div>
	);
}

export default App;
