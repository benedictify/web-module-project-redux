import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import App from './App'
import { BrowserRouter as Bowser } from 'react-router-dom';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Bowser>
			<App />
		</Bowser>
	</Provider>
	,
	document.getElementById('root')
);
