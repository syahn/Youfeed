import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsBehance } from '../../actions/feed/BehanceActionCreator';
import BehanceFeed from '../../components/feeds/BehanceFeed';

const propTypes = {

};

class Behance extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsBehance());
  }
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
