import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
// import initialState from '../database';
import { loadState } from './localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();
const persistedState = loadState();


/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
);
/* eslint-enable */

export default store;

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )
// export default function configureStore(preloadedState) {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(
//       thunkMiddleware,
//       loggerMiddleware
//     )
//   )
// }
