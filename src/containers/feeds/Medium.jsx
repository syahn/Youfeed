import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { superfeedrConfig } from '../../config';
import { fetchPostsMedium } from '../../actions/feed/MediumActionCreator';
import MediumFeed from '../../components/feeds/MediumFeed';


const propTypes = {

};
const defaultProps = {

};

class Medium extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsMedium());
  }

  render() {
    const { posts } = this.props;
    return <MediumFeed posts={posts} />;
  }
}

const mapStateToProps = state => ({
  posts: state.postsByMedium
});


Medium.propTypes = propTypes;
Medium.defaultProps = defaultProps;

export default connect(mapStateToProps)(Medium);
