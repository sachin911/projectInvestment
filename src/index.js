import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas/sagas';
import App from './App';
import './index.css';



const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

const action = type => store.dispatch({type})

// store.dispatch("GET_DATA");
action("GET_DATA");

ReactDOM.render(
	<Provider store={store}> 
  		<App/>
  	</Provider>,
  document.getElementById('root')
);



