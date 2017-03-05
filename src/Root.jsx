// src/routes.js
import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './components/app/App';
import FeedBox from './components/feeds/FeedBox';
import HackerNews from './components/feeds/HackerNews';
import About from './components/about';
import NotFound from './components/notfound';
import { listenToAuth } from './actions/auth/AuthActionCreator';

const store = configureStore();

class Root extends Component {
	componentWillMount() {
		store.dispatch(listenToAuth());
	}

  render() {
    return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
					<IndexRoute component={FeedBox} />
					<Route path="/hacker-news" component={HackerNews} />
				</Route>
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  );
	}
}

export default Root;
