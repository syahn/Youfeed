import React, { Component } from 'react';
import querystring from 'querystring';
import Feed from './Feed';

const propTypes = {

};
const defaultProps = {

};

class FeedBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      login: 'Frankahn',
      token: '84a7ae219672104d9a8641093444ca2f',
      data: {}
    };
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent() {
    const { login, token } = this.state;
    let url = "https://stream.superfeedr.com/?";
    const query = {
      'count': 20,
      'hub.mode': 'retrieve',
      'authorization': btoa([login, token].join(':')),
      'hub.callback': 'https://push.superfeedr.com/dev/null'
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
        key={story.id}
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
FeedBox.defaultProps = defaultProps;

export default FeedBox;
