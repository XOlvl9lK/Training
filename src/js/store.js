import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import { save } from 'redux-localstorage-simple'


const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(save({ namespace: 'message-storage' })))
);

export default store;
