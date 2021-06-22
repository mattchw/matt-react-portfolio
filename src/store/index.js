import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "../reducers/index";

import { saveState, loadState } from './localStorage';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.subscribe(() => {
    saveState({
        themeReducer: store.getState().themeReducer,
    });
});

export default store;