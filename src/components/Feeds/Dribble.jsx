import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DribbleFeed from './DribbleFeed';

const propTypes = {
  posts: PropTypes.array,
  dispatch: PropTypes.func
};

class Dribble extends Component {
  render() {
    const { posts } = this.props;

    return <DribbleFeed posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: state.postsByDribble
});

Dribble.propTypes = propTypes;

export default connect(mapStateToProps)(Dribble);
