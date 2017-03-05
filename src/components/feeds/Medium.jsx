import React, { Component } from 'react';
import { superfeedrConfig } from '../../config';
import querystring from 'querystring';

const propTypes = {

};
const defaultProps = {

};

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      token: superfeedrConfig.token,
      login: superfeedrConfig.login,
      data: {}
    };
  }

  componentWillMount(){
    this.loadContent();
  }

  loadContent() {
    const { login, token } = this.state;
    let url = "https://stream.superfeedr.com/?";
    const query = {
      'count': 20,
      'hub.mode': 'retrieve',
      'authorization': btoa([login, token].join(':')),
      'hub.callback': `https://youfeed.space/medium`
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
    const newsNodes = stories.map((story) => {
      console.log(story);
      return (
        <p>{story.title}</p>
      );
    }

    );
    return (
      <div className="panel panel-default">
        <div className="list-group">
          {newsNodes}
        </div>
      </div>
    );
}
}

Medium.propTypes = propTypes;
Medium.defaultProps = defaultProps;

export default Medium;
