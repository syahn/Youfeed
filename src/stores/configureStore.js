import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

function configureStore() {
  const loggerMiddleware = createLogger();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );
  
  return store;
}

export default configureStore;
