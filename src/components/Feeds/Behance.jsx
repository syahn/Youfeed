import React, { Component } from 'react';
import { connect } from 'react-redux';
import BehanceFeed from './BehanceFeed';

const propTypes = {

};

class Behance extends Component {
  render(){
    const { posts } = this.props;
    return <BehanceFeed posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: state.postsByBehance
});

Behance.propTypes = propTypes;

export default connect(mapStateToProps)(Behance);
