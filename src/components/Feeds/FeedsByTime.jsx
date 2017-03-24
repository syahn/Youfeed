/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {

};
const defaultProps = {

};

class FeedsByTime extends Component {

  constructor(props) {
    super(props);
    const {
      medium,
      techMeme,
      hackerNews,
      behance,
      dribble,
      rss
    } = this.props;

    const newPosts = [
      medium,
      techMeme,
      dribble,
      behance,
      hackerNews,
      rss
    ].reduce((a, c) => a.concat(c), []).sort((x, y) => {
      return y.time - x.time;
    });;

    this.state = { posts: newPosts };
  }

  componentWillReceiveProps(nextProps) {
    const {
      medium,
      techMeme,
      hackerNews,
      behance,
      dribble,
      rss
    } = this.props;

    const newPosts = [
      nextProps.medium,
      nextProps.techMeme,
      nextProps.dribble,
      nextProps.behance,
      nextProps.hackerNews,
      nextProps.rss
    ].reduce((a, c) => a.concat(c), []).sort((x, y) => {
      return y.time - x.time;
    });

    this.setState({ posts: newPosts });
  }

  render() {
    const { posts } = this.state;
    return(
      <FeedTemplate posts={posts} />
    );
  }
}

FeedsByTime.propTypes = propTypes;

export default connect(
  state => ({
    hackerNews: state.postsByHackerNews,
    techMeme: state.postsByTechmeme,
    behance: state.postsByBehance,
    dribble: state.postsByDribble,
    medium: state.postsByMedium,
    rss: Object.keys(state.postsByRSS).reduce((a, c) =>
          a.concat(state.postsByRSS[c].items),[])
  })
)(FeedsByTime);
