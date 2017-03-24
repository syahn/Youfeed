import React, { Component, PropTypes } from 'react';
import FeedTemplate from './FeedTemplate';
import { connect } from 'react-redux';


const propTypes = {
  posts: PropTypes.array
};

class HackerNews extends Component {
  render() {
    const { posts } = this.props;

    return <FeedTemplate posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: state.postsByHackerNews
});

HackerNews.propTypes = propTypes;

export default connect(mapStateToProps)(HackerNews);
