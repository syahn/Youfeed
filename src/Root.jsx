// src/routes.js
import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './components/App';
import Rss from './components/Feeds/Rss';
import FeedBox from './components/Feeds/FeedBox';
import FeedsByTime from './components/Feeds/FeedsByTime';
import HackerNews from './components/Feeds/HackerNews';
import Medium from './components/Feeds/Medium';
import Behance from './components/Feeds/Behance';
import Dribble from './components/Feeds/Dribble';
import TechMeme from './components/Feeds/TechMeme';
import Reddit from './components/Feeds/Reddit';
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
					<Route path="/feedsbytime" component={FeedsByTime} />
					<Route path="/hacker-news" component={HackerNews} />
					<Route path="/medium" component={Medium} />
					<Route path="/behance" component={Behance} />
					<Route path="/dribble" component={Dribble} />
					<Route path="/techmeme" component={TechMeme} />
					<Route path="/reddit" component={Reddit} />
					<Route path="/(:subscription)" component={Rss} />
				</Route>
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  );
	}
}

export default Root;
