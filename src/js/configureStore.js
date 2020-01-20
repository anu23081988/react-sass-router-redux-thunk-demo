import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../js/reducers/rootReducer';

const middlewares = [thunkMiddleware, createLogger()];

const store = createStore(rootReducer,undefined,applyMiddleware(...middlewares));
export default store;
// export default function configureStore(initialState) {
//     return store(rootReducer,initialState);
// }