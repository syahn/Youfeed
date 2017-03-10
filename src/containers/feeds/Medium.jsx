import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MediumFeed from '../../components/feeds/MediumFeed';

const propTypes = {
  dispatch: PropTypes.func
};

class Medium extends Component {
  render() {
    const { posts } = this.props;
    return <MediumFeed posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: state.postsByMedium
});

Medium.propTypes = propTypes;

export default connect(mapStateToProps)(Medium);
