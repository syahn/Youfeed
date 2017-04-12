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
      reddit,
      rss
    } = this.props;

    const newPosts = [
      medium,
      techMeme,
      hackerNews,
      behance,
      dribble,
      reddit,
      rss
    ].reduce((a, c) => a.concat(c), []).sort((a,b) => b.time - a.time).slice(0,30);
    console.log('constructor', newPosts);
    this.state = { posts: newPosts };
  }

  componentWillReceiveProps(nextProps) {
    const newPosts = [
      nextProps.medium,
      nextProps.techMeme,
      nextProps.hackerNews,
      nextProps.behance,
      nextProps.dribble,
      nextProps.reddit,
      nextProps.rss
    ].reduce((a, c) => a.concat(c), []).sort((a,b) => b.time - a.time);

    this.setState({ posts: newPosts });
  }

  render() {
    const { posts } = this.state;

    return(
      <FeedTemplate
        posts={posts}
        showProvider='true'
      />
    );
  }
}

FeedTemplate.propTypes = propTypes;

const mapStateToProps = state => {
  const {
    personalization,
    postsByHackerNews,
    postsByTechmeme,
    postsByBehance,
    postsByDribble,
    postsByReddit,
    postsByMedium,
    postsByRSS,
    auth
  } = state;

  let totalClickCount = Object.keys(personalization).reduce((a,c) => {
    return a + personalization[c].postClick;
  }, 0);

  if(auth.status === 'AUTH_ANONYMOUS' || totalClickCount < 1) {
    return {
      hackerNews: postsByHackerNews,
      techMeme: postsByTechmeme,
      behance: postsByBehance,
      dribble: postsByDribble,
      medium: postsByMedium,
      reddit: postsByReddit,
      rss: Object.keys(postsByRSS).reduce((a, c) => a.concat(postsByRSS[c].items),[])
    };
  }

  let totalCategoryCount = Object.keys(personalization).reduce((a,c) => {
    return a + personalization[c].categoryClick;
  }, 0);

  let count = {
    medium: Math.floor(personalization['medium'].postClick / totalCategoryCount * 50),
    techMeme: Math.floor(personalization['techmeme'].postClick / totalCategoryCount * 50),
    behance: Math.floor(personalization['behance'].postClick / totalCategoryCount * 50),
    dribble: Math.floor(personalization['dribble'].postClick / totalCategoryCount * 50),
    hackerNews: Math.floor(personalization['hacker-news'].postClick / totalCategoryCount * 50),
    reddit: Math.floor(personalization['reddit'].postClick / totalCategoryCount * 50),
  };

  for(let i in postsByRSS) {
    const title = postsByRSS[i].title;
    count[title] = Math.floor(personalization[title].postClick / totalCategoryCount * 50);
  }

  let sortedMedium = postsByMedium.sort((a,b) => a.time - b.time).slice(0, count.medium);
  let sortedTechMeme = postsByTechmeme.sort((a,b) => a.time - b.time).slice(0, count.techMeme);
  let sortedBehance = postsByBehance.sort((x,y) => y.score - x.score).slice(0, count.behance);
  let sortedHackerNews = postsByHackerNews.sort((x,y) => y.score - x.score).slice(0, count.hackerNews);
  let sortedDribble = postsByDribble.sort((x,y) => y.score - x.score).slice(0, count.dribble);
  let sortedReddit = postsByReddit.sort((x,y) => y.score - x.score).slice(0, count.reddit);
  let sortedRss = Object.keys(postsByRSS).reduce((a, c) =>
                    a.concat(postsByRSS[c].items.slice(0, count[postsByRSS[c].title.split(' ')[0]])),[]).sort((a,b) => a.time - b.time);

  return {
    hackerNews: sortedHackerNews,
    techMeme: sortedTechMeme,
    behance: sortedBehance,
    dribble: sortedDribble,
    medium: sortedMedium,
    reddit: sortedReddit,
    rss: sortedRss
  };
};

export default connect(mapStateToProps)(Personalized);
