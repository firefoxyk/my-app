import {store} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App appState={state} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>);

};
 
rerenderEntireTree(store.getState());

store.subsсribe(rerenderEntireTree);
