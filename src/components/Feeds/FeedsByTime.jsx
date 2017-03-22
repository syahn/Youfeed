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
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const {
      hackerNews,
      behance,
      dribble,
      medium,
      rss
    } = this.props;

    const postBehance = behance.map(post => ({
      title: post.name,
      author: post.owners[0].display_name,
      logo: post.features[0].site.icon,
      image: post.covers.original,
      url: post.url,
      siteUrl: '',
      score: post.stats.appreciations,
      time: new Date(post.published_on * 1000).toLocaleString(),
      content: '',
      category: post.fields || []
    }));

    const postHackerNews = hackerNews.map(post => ({
      title: post.title,
      author: post.by,
      logo: 'https://dl.dropbox.com/s/t8avm6wndwfxf04/hackerNews.svg?dl=0',
      image: '',
      url: `https://news.ycombinator.com/item?id=${post.id}`,
      siteUrl: post.url,
      score: post.score,
      time: new Date(post.time * 1000).toLocaleString(),
      content: '',
      category: []
    }));

    const postDribble = dribble.map(post => ({
      title: post.title,
      author: post.user.name,
      logo: 'https://dl.dropbox.com/s/089c3x5fquh8oe9/dribbble%20.svg?dl=0',
      image: post.images.normal,
      url: post.html_url,
      siteUrl: '',
      score: post.likes_count,
      time: post.created_at,
      content: '',
      category: post.tags
    }));

    const postMedium = medium.map(post => ({
      title: post.title,
      author: post.actor.displayName,
      logo: post.source.image,
      image: '',
      url: post.permalinkUrl,
      siteUrl: '',
      score: '',
      time: post.published,
      content: post.content && ReactHtmlParser(post.content.split('</p>')[0]),
      category: post.category || []
    }));

    const newPosts = [
      postDribble,
      postBehance,
      postHackerNews,
    ].reduce((a, c) => a.concat(c), []);

    this.setState({ posts: newPosts });

    this.setState(prevState => {
      console.log('repv', prevState.posts);
      return { posts: prevState.posts.concat(postMedium) };
    });

  }

  render() {
    const { posts } = this.state;
    console.log(posts);
    return(
      <FeedTemplate posts={posts} />
    );
  }
}

FeedsByTime.propTypes = propTypes;
FeedsByTime.defaultProps = defaultProps;

export default connect(
  state => ({
    hackerNews: state.postsByHackerNews,
    techMeme: state.postsByTechmeme,
    behance: state.postsByBehance,
    dribble: state.postsByDribble,
    medium: state.postsByMedium,
    rss: state.postsByRss
  })
)(FeedsByTime);
