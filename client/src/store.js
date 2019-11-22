//ref to https://redux.js.org/
//https://www.youtube.com/watch?v=iI5h4-pChho&t=234s

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];


const store = createStore( rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //you need this redux info:
    //https://github.com/zalmoxisus/redux-devtools-extension#usage
));

export default store;
