import React, { Component } from 'react';
import { connect } from 'react-redux';
import TechmemeFeed from '../../components/feeds/TechmemeFeed';
import { fetchPostsTechmeme } from '../../actions/feed/TechmemeActionCreator';

const propTypes = {

};


class TechMeme extends Component {

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(fetchPostsTechmeme());
  }

  render() {
    const { posts } = this.props;

    return <TechmemeFeed posts={posts}></TechmemeFeed>;
  }
}

const mapStateToProps = state => ({
  posts: state.postsByTechmeme
});

TechMeme.propTypes = propTypes;

export default connect(mapStateToProps)(TechMeme);
