import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';

const propTypes = {
  posts: PropTypes.array,
  dispatch: PropTypes.func
};

class Dribble extends Component {
  render() {
    const { posts } = this.props;
        
    return <FeedTemplate posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: state.postsByDribble
});

Dribble.propTypes = propTypes;

export default connect(mapStateToProps)(Dribble);
