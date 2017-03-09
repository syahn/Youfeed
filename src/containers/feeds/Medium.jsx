import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsMedium } from '../../actions/feed/MediumActionCreator';
import MediumFeed from '../../components/feeds/MediumFeed';

const propTypes = {
  dispatch: PropTypes.func
};

class Medium extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsMedium());
  }

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
