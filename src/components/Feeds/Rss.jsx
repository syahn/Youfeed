import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Feed from '../Feeds/Feed';
import { CenterSpin } from '../General';
import { fetchPostsRss } from '../../actions/feed/RssPostActionCreator';

const propTypes = {

};

class RssFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.newPosts;
  }

  componentWillMount() {
    const { params, postList, subscription } = this.props;
    let postsElement;
    for(let e of subscription) {
      if(e.subscription.feed.title.indexOf(params.subscription) > -1) {
        let posts = postList[e.subscription.feed.url].items;
        postsElement = posts.map(post => (
          <Feed
            key={uuid()}
            post={post}
          />
        ));
        break;
      }
    }
    this.newPosts = postsElement;

  }

  componentWillReceiveProps(nextProps) {
    const { params, subscription } = this.props;
    let postsElement;
    if(params.subscription !== nextProps.params.subscription) {
      for(let e of subscription) {
        if(e.subscription.feed.title.indexOf(nextProps.params.subscription) > -1) {
          let posts = nextProps.postList[e.subscription.feed.url].items;
          postsElement = posts.map(post => (
            <Feed
              key={uuid()}
              post={post}
            />
          ));
          break;
        }
      }
    }
    this.newPosts = postsElement;
  }


  render() {
    return(
      <div>
        {this.newPosts || <CenterSpin size="large" />}
      </div>
    );
  }
}

RssFeed.propTypes = propTypes;

export default connect(
  state => ({
    subscription: state.subscription,
    postList: state.postsByRSS
  }), {
    onFetchPostsRss: fetchPostsRss
  }
)(RssFeed);
