import { createStore, applyMiddleware } from 'redux';
// import throttle from 'lodash/throttle';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
// import { saveState, loadState } from './localStorage';
import initialState from '../database';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore() {
  // const persistedState = loadState();
  const loggerMiddleware = createLogger();
  const store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
        )
      )
  );

  // store.subscribe(throttle(() => {
  //   saveState(store.getState());
  // }, 1000));

  return store;
}

export default configureStore;
