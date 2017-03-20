import React, { Component } from 'react';
import { connect } from 'react-redux';
import Selected from './Selected';
import RedditFeed from './RedditFeed';
import { CenterSpin } from '../General';
import {
  selectReddit,
  fetchPostsIfNeeded,
  invalidateReddit
} from '../../actions/feed/RedditActionCreator';

class Reddit extends Component {

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit));
    }
  }

  handleChange = (nextReddit) => {
    this.props.dispatch(selectReddit(nextReddit));
  }

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedReddit } = this.props;
    dispatch(invalidateReddit(selectedReddit));
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selected value={selectedReddit}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend', 'MachineLearning' ]}
        />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>

        {isEmpty
          ? (isFetching ? <CenterSpin size="large" /> : <h2>Empty.</h2>)
          : <RedditFeed posts={posts} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
};


export default connect(mapStateToProps)(Reddit);

// static propTypes = {
//   selectedReddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// };
