import { createStore, applyMiddleware } from "redux";
// import throttle from "lodash/throttle";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers/index";
// import { loadState } from "./localStorage";
import { composeWithDevTools } from "redux-devtools-extension";

function configureStore() {
  
  const loggerMiddleware = createLogger();
  const store = createStore(
    rootReducer,
    
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );

  // store.subscribe(
  //   throttle(() => {
  //     const state = store.getState();
  //     if (state.auth.uid) {
  //       const widgetState = {
  //         memo: state.memo,
  //         todo: state.todos
  //       };
  //       saveState(state.auth.ui, widgetState);
  //     }
  //   }, 1000)
  // );

  return store;
}

export default configureStore;
