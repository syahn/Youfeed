import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TechmemeFeed from '../../components/feeds/TechmemeFeed';

const propTypes = {
  posts: PropTypes.array.isRequired
};

class TechMeme extends Component {
  render() {
    const { posts } = this.props;

    return <TechmemeFeed posts={posts}></TechmemeFeed>;
  }
}

TechMeme.propTypes = propTypes;

export default connect(
  state => ({
    posts: state.postsByTechmeme
  })
)(TechMeme);
