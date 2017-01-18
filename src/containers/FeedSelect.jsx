import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/feed/reddit';
import Navigator from '../components/feeds/Navigator';


class FeedSelect extends Component {


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

  handleChange = nextReddit => {
    this.props.dispatch(selectReddit(nextReddit));
  }

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedReddit } = this.props;
    dispatch(invalidateReddit(selectedReddit));
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  render() {
    const { selectedReddit } = this.props;

    return (
      <div>
        <Navigator value={selectedReddit}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend', 'MachineLearning' ]} />
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

export default connect(mapStateToProps)(FeedSelect);
//
// static propTypes = {
//   selectedReddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }
