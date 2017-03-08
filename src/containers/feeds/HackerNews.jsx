import React, { Component, PropTypes } from 'react';
import HackerNewsFeed from '../../components/feeds/HackerNewsFeed';
import { connect } from 'react-redux';


const propTypes = {
  items: PropTypes.array
};

class HackerNews extends Component {
  render() {
    const { items } = this.props;

    return <HackerNewsFeed posts={items} />;
  }
}

const mapStateToProps = state => ({
  items: state.postsByHackerNews
});

HackerNews.propTypes = propTypes;

export default connect(mapStateToProps)(HackerNews);
