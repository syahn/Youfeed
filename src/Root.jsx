// src/routes.js
import * as es6Promise from 'es6-promise';
es6Promise.polyfill();
import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './components/App';
import Rss from './components/Feeds/Rss';
import Personalized from './components/Feeds/Personalized';
import FeedsByTime from './components/Feeds/FeedsByTime';
import YoufeedFeed from './components/Feeds/YoufeedFeed';
import About from './components/about';
// import NotFound from './components/notfound';
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
					<IndexRoute component={Personalized} />
					<Route path="/about" component={About} />
					<Route path="/feedsbytime" component={FeedsByTime} />
					<Route path="/hacker-news" component={YoufeedFeed} />
					<Route path="/medium" component={YoufeedFeed} />
					<Route path="/behance" component={YoufeedFeed} />
					<Route path="/dribble" component={YoufeedFeed} />
					<Route path="/techmeme" component={YoufeedFeed} />
					<Route path="/reddit" component={YoufeedFeed} />
					<Route path="/rss/(:subscription)" component={Rss} />
					<Redirect from='*' to='/' />
				</Route>
      </Router>
    </Provider>
  );
	}
}

export default Root;
