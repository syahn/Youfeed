// src/routes.js
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'

import store from './stores/ConfigureStore';
import App from './components/app/App';
import About from './components/about';
import Widget from './components/authentication/widget';
import NotFound from './components/notfound';


const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/signin" component={Widget} />
      <Route path="*" component={NotFound} />

    </Router>
  </Provider>
);

export default Routes;
