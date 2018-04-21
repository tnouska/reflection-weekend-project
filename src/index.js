import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
//creates the saga middleware.

//Store
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
)//end store instance


sagaMiddleware.run(rootSaga)
//runs rootSaga in sagaMiddleware

ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('root'));
registerServiceWorker();