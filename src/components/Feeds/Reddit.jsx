import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';
import { CenterSpin } from '../General';

class Reddit extends Component {

  render() {
    const { posts, isFetching } = this.props;
    const isEmpty = posts.length === 0;

    return (
      <div>
        {isEmpty
          ? (isFetching ? <CenterSpin size="large" /> : <h2>Empty.</h2>)
          : <FeedTemplate posts={posts} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { postsByReddit } = state;

  return {
    posts: postsByReddit.items || [],
    isFetching: true,
  };
};

export default connect(mapStateToProps)(Reddit);
