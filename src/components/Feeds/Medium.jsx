import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';

const propTypes = {
  posts: PropTypes.array
};

class Medium extends Component {
  render() {
    const { posts } = this.props;
    console.log('posts',posts);
    return <FeedTemplate posts={posts} />;
  }
}

Medium.propTypes = propTypes;

export default connect(
  state => ({
    posts: state.postsByMedium
  })
)(Medium);
