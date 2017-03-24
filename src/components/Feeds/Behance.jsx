import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';
import { CenterSpin } from '../General';


const propTypes = {

};

class Behance extends Component {
  render(){
    const { posts } = this.props;
    const renderPosts = posts.length > 0
      ?
      <FeedTemplate posts={posts} />
      :
      <CenterSpin size="large" />;

    return (
      <div>
        {renderPosts}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsByBehance
});

Behance.propTypes = propTypes;

export default connect(mapStateToProps)(Behance);
