import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';

const propTypes = {
  medium: PropTypes.array,
  techMeme: PropTypes.array,
  hackerNews: PropTypes.array,
  behance: PropTypes.array,
  dribble: PropTypes.array,
  rss: PropTypes.array
};

class Personalized extends Component {
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
      hackerNews,
      behance,
      dribble,
      rss
    ].reduce((a, c) => a.concat(c), []).sort((x, y) => y.time - x.time);

    this.state = { posts: newPosts };
  }

  componentWillReceiveProps(nextProps) {
    const newPosts = [
      nextProps.medium,
      nextProps.techMeme,
      nextProps.hackerNews,
      nextProps.behance,
      nextProps.dribble,
      nextProps.rss
    ].reduce((a, c) => a.concat(c), []).sort((x, y) => y.time - x.time);

    this.setState({ posts: newPosts });
  }

  render() {
    const { posts } = this.state;
    return(
      <FeedTemplate posts={posts} />
    );
  }
}

FeedTemplate.propTypes = propTypes;

export default connect(
  state => {
    const {
      personalization,
      postsByHackerNews,
      postsByTechmeme,
      postsByBehance,
      postsByDribble,
      postsByMedium,
      postsByRSS
    } = state;

    let totalCount = Object.keys(personalization).reduce((a,c) => {
      return a + personalization[c];
    }, 0);

    let count = {
      medium: Math.floor(personalization['medium'] / totalCount * 50),
      techMeme: Math.floor(personalization['techmeme'] / totalCount * 50),
      behance: Math.floor(personalization['behance'] / totalCount * 50),
      dribble: Math.floor(personalization['dribble'] / totalCount * 50),
      hackerNews: Math.floor(personalization['hacker-news'] / totalCount * 50),
    };

    for(let i in postsByRSS) {
      const title = postsByRSS[i].title.split(' ')[0];
      count[title] = Math.floor(personalization[title] / totalCount * 50);
    }

    let sortedMedium = postsByMedium.slice(0, count.postsByMedium);
    let sortedTechMeme = postsByTechmeme.slice(0, count.postsByTechmeme);
    let sortedBehance = postsByBehance.sort((x,y) => y.score - x.score).slice(0, count.postsByBehance);
    let sortedHackerNews = postsByHackerNews.sort((x,y) => y.score - x.score).slice(0, count.postsByHackerNews);
    let sortedDribble = postsByDribble.sort((x,y) => y.score - x.score).slice(0, count.postsByDribble);
    let sortedRss = Object.keys(postsByRSS).reduce((a, c) =>
      a.concat(postsByRSS[c].items
       .slice(0, count[postsByRSS[c].title.split(' ')[0]])),[]);

    return {
      hackerNews: sortedHackerNews,
      techMeme: sortedTechMeme,
      behance: sortedBehance,
      dribble: sortedDribble,
      medium: sortedMedium,
      rss: sortedRss,
    };
  }
)(Personalized);
