import React, { Component } from 'react';
import { connect } from 'react-redux';
import querystring from 'querystring';
import uuid from 'uuid';
import Feed from './Feed';
import { superfeedrConfig } from '../../config';

const propTypes = {

};

class FeedBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      token: superfeedrConfig.token,
      login: superfeedrConfig.login,
      data: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.status == 'AUTH_LOGGED_IN') {
      this.loadContent(nextProps.auth);
    }
  }

  loadContent(auth) {
    const { login, token } = this.state;
    let url = "https://stream.superfeedr.com/?";
    const query = {
      'count': 20,
      'hub.mode': 'retrieve',
      'authorization': btoa([login, token].join(':')),
      'hub.callback': `https://youfeed.space/${auth.uid}`
    };
    url = url + querystring.stringify(query);

    let source = new EventSource(url);

    source.addEventListener("notification", (e) => {
      let notification = JSON.parse(e.data);

      notification.items.sort((x, y) => {
        return x.published - y.published;
      });

      notification.items.forEach((item) => {
        if(!item.source)
          item.source = {
            title: notification.title,
            permalinkUrl: notification.permalinkUrl
          };
          let updatedStories = new Array(item);
          this.setState((prevState) => ({
            stories: updatedStories.concat(prevState.stories)
          }));
        });
    });
  }

  render() {
    const { stories } = this.state;
    const newsNodes = stories.map((story) => (
      <Feed
        key={uuid()}
        story={story}
      >
      </Feed>
    ));
    return (
      <div className="panel panel-default">
        <div className="list-group">
          {newsNodes}
        </div>
      </div>
    );
  }
}


FeedBox.propTypes = propTypes;

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(FeedBox);
