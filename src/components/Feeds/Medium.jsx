import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MediumFeed from './MediumFeed';

const propTypes = {
  dispatch: PropTypes.func
};

class Medium extends Component {
  render() {
    const { posts } = this.props;
    return <MediumFeed posts={posts} />;
  }
}

Medium.propTypes = propTypes;

export default connect(
  state => ({
    posts: state.postsByMedium
  })
)(Medium);
