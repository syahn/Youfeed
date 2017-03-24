import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';

const propTypes = {
  posts: PropTypes.array.isRequired
};

class TechMeme extends Component {
  render() {
    const { posts } = this.props;

    return <FeedTemplate posts={posts} />;
  }
}

TechMeme.propTypes = propTypes;

export default connect(
  state => ({
    posts: state.postsByTechmeme
  })
)(TechMeme);
