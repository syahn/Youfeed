import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsDribble } from '../../actions/feed/DribbleActionCreator';
import DribbleFeed from '../../components/feeds/DribbleFeed';

const propTypes = {
  posts: PropTypes.array,
  dispatch: PropTypes.func
};

class Dribble extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsDribble());
  }

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
