import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import FeedTemplate from './FeedTemplate';
import { CenterSpin } from '../General';
import { clickPost } from '../../actions/personal/PersonalActionCreator';

const propTypes = {
  posts: PropTypes.array
};

class YoufeedFeed extends Component {
  handleClick = () => {
    const { route, onClickPost } = this.props;
    onClickPost(route.path.slice(1));
  }

  render(){
    const { posts } = this.props;
    const renderPosts = posts.length > 0
      ? <FeedTemplate
          posts={this.props.posts}
          clickPost={this.handleClick}
        />
      : <CenterSpin size="large" />;

    return (
      <div>
        {renderPosts}
      </div>
    );
  }
}

YoufeedFeed.propTypes = propTypes;

//TODO: Refactoring
const mapStateToProps = (state, props) => {
  const {
    postsByBehance,
    postsByDribble,
    postsByHackerNews,
    postsByReddit,
    postsByTechmeme,
    postsByMedium
  } = state;
  console.log('props', props);
  const map = {
    '/behance': postsByBehance,
    '/hacker-news': postsByHackerNews,
    '/dribble': postsByDribble,
    '/reddit': postsByReddit,
    '/techmeme': postsByTechmeme,
    '/medium': postsByMedium
  };

  return ({ posts: map[props.route.path] });
};

export default connect(
  mapStateToProps,
  { onClickPost: clickPost }
)(YoufeedFeed);
