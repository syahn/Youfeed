import React, { Component, PropTypes } from 'react';
import FeedTemplate from './FeedTemplate';
import { connect } from 'react-redux';
import { clickPost } from '../../actions/personal/PersonalActionCreator';


const propTypes = {
  posts: PropTypes.array
};

class HackerNews extends Component {
  handleClick = () => {
    const { route, onClickPost } = this.props;
    onClickPost(route.path.slice(1));
  }

  render() {
    const { posts, route } = this.props;
    console.log(this.props, posts, this.props.params);
    return (
      <FeedTemplate
        posts={posts}
        clickPost={this.handleClick}
      />;
    )
  }
}

const mapStateToProps = ;

HackerNews.propTypes = propTypes;

export default connect(state =>
  ({ posts: state.postsByHackerNews }),
  { onClickPost: clickPost }
)(HackerNews);
