import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { CenterSpin } from '../General';
import FeedTemplate from './FeedTemplate';
import { fetchPostsRss } from '../../actions/feed/RssPostActionCreator';

const propTypes = {
  params: PropTypes.object,
  postsList: PropTypes.object,
  subscription: PropTypes.array
};

class Rss extends Component {

  constructor(props) {
    super(props);
    const { params, postsList, subscription } = this.props;
    let postRss = [];

    for(let e of subscription){
      const { title, url } = e.subscription.feed;
      if(title.indexOf(params.subscription) > -1 && postsList[url]) {
        postRss = postsList[url].items;
        break;
      }
    }

    this.state = {
      posts: postRss,
      fetched: postRss.length > 0
    };
  }

  componentWillReceiveProps(nextProps) {
    const { params, subscription } = this.props;

    let { fetched } = this.state;
    if(!fetched || (params.subscription !== nextProps.params.subscription)) {
      for(let e of subscription){
        const { title, url } = e.subscription.feed;
        if(title.indexOf(nextProps.params.subscription) > -1 && nextProps.postsList[url]) {
          const postRss = nextProps.postsList[url].items;
          this.setState({posts: postRss, fetched: true});
          break;
        }
      }
    }
  }

  render() {
    const { posts } = this.state;
    return(
      <div>
        { posts.length > 0
          ?
          <FeedTemplate posts={posts} />
          :
          <CenterSpin size="large" /> }
      </div>
    );
  }
}

Rss.propTypes = propTypes;

export default connect(
  state => ({
    subscription: state.subscription,
    postsList: state.postsByRSS
  }), {
    onFetchPostsRss: fetchPostsRss
  }
)(Rss);
