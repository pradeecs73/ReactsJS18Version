import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {sagaDeleteResult} from './store/Sagas/resultindex';

axios.defaults.baseURL="https://jsonplaceholder.typicode.com";
//axios.defaults.headers.common['Authorization']="12345";

axios.interceptors.request.use((request:any)=>{
     return request;
},(error:any)=>{
     return Promise.reject(error);
});

axios.interceptors.response.use((response:any)=>{
    return response;
},(error:any)=>{
    return Promise.reject(error);
});

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const sagaMiddleware=createSagaMiddleware();

const composeEnhancers =(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(sagaDeleteResult);
ReactDOM.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
