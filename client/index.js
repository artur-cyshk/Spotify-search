import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import { Root } from './components';
const store = createStore();

ReactDOM.render(
	<Provider store={store}>
 		<Root/> 
 	</Provider>,
 	document.getElementById('root')
);