// src/routes.js
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'

import store from './stores/ConfigureStore';
import App from './components/app';
import About from './components/about';
import NotFound from './components/notfound';
import SignIn from './components/authentication/signin';


const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
      <Route path="/sign-in" component={SignIn} />
    </Router>
  </Provider>
);

export default Routes;
