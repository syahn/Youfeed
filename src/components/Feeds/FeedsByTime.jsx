
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';
import { CenterSpin } from '../General';

const propTypes = {
  medium: PropTypes.array,
  techMeme: PropTypes.array,
  hackerNews: PropTypes.array,
  behance: PropTypes.array,
  dribble: PropTypes.array,
  reddit: PropTypes.array,
  rss: PropTypes.array
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
      reddit,
      rss
    } = this.props;

    const newPosts = [
      medium,
      techMeme,
      dribble,
      behance,
      hackerNews,
      reddit,
      rss
    ].reduce((a, c) => a.concat(c), []).sort((x, y) => {
      return y.time - x.time;
    }).slice(0,30);
    this.state = {
      posts: newPosts || []
    };
  }

  componentWillReceiveProps(nextProps) {

    const newPosts = [
      nextProps.medium,
      nextProps.techMeme,
      nextProps.dribble,
      nextProps.behance,
      nextProps.hackerNews,
      nextProps.reddit,
      nextProps.rss
      ].reduce((a, c) => a.concat(c), []).sort((x, y) => {
        return y.time - x.time;
      }).slice(0,30);
    this.setState({ posts: newPosts });
  }

  render() {
    const { posts } = this.state;
    return(
      <div>
        {posts.length > 0
          ? <FeedTemplate
              posts={posts}
              showProvider='true'
            />
          : <CenterSpin size="large" />
        }
      </div>
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
    reddit: state.postsByReddit,
    rss: Object.keys(state.postsByRSS).reduce((a, c) =>
          a.concat(state.postsByRSS[c].items),[])
  })
)(FeedsByTime);
