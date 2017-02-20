
import React from 'react';
import querystring from 'querystring';
import ReactHtmlParser from 'react-html-parser';


var FeedBox = React.createClass({
  getInitialState: function() {
    return {
      stories: [],
      login: 'Frankahn',
      token: '84a7ae219672104d9a8641093444ca2f',
      data: {}
    };
  },

  loadContent: function loadContent() {
    var that = this;

    var url = "https://stream.superfeedr.com/?";
    var query = {
      'count': 20,
      'hub.mode': 'retrieve',
      'authorization': btoa([this.state.login, this.state.token].join(':')),
      'hub.callback': 'https://push.superfeedr.com/dev/null'
    };
    url = url + querystring.stringify(query);
    // url = [url, serialize(query)].join('?');
    var source = new EventSource(url);

    source.addEventListener("notification", function(e) {
      var notification = JSON.parse(e.data);
      that.state.data = e.data;

      notification.items.sort(function(x, y) {
        return x.published - y.published;
      });
      notification.items.forEach(function(item) {
        if(!item.source)
          item.source = {
            title: notification.title,
            permalinkUrl: notification.permalinkUrl
          };
          that.state.stories.unshift(item);
          that.setState({
            stories: that.state.stories
          });
        });
    });
  },


  componentDidMount: function() {
    this.loadContent();
  },

  render: function() {

    var newsNodes = this.state.stories.map(function (story) {
      return (
        <NewsBit key={story.id} story={story}>
        </NewsBit>
      );
    });
    return (
      <div className="panel panel-default">
        <div className="list-group">
          {newsNodes}
        </div>

        <div className="panel-footer">Made with <a href="https://push.superfeedr.com">Superfeedr</a>, hosted on <a href="https://github.com/">Github</a>, with <a href="https://www.cloudflare.com/">CloudFlare</a>. <a href="https://github.com/superfeedr/readernews">Source code</a>.</div>
      </div>
    );
  }
});

var NewsBit = React.createClass({
  render: function() {
    var source = {
      title: "",
      url: "",
      icon: "",
      text: ""
    };
    if(this.props.story.source) {
      source.title = this.props.story.source.title;
      source.icon = "http://www.google.com/s2/favicons?domain=" + encodeURIComponent(this.props.story.source.permalinkUrl);
      source.url = this.props.story.source.permalinkUrl;
      source.text = this.props.story.summary;
    }

    // var published = jQuery.timeago(new Date(this.props.story.published * 1000));
    const test = source.text;
    return (
      <div className="List__item">
    <a href={this.props.story.permalinkUrl} className="list-group-item">
      <h2 className="list-group-item-heading"><img src={source.icon} />{this.props.story.title}</h2>
      <div>{ReactHtmlParser(test)}</div>
      <span className="source">{source.title}</span>
    </a>
    </div>
    );
  }
});


export default FeedBox;
