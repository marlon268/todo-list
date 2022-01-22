import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import StoreProvider from './store/StoreProvider';

import './sass/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
