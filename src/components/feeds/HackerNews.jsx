import React, { Component  } from 'react';
import styled from 'styled-components';
import { fetchPosts } from '../../actions/feed/hackernews';
import { connect } from 'react-redux';


const propTypes = {

};
const defaultProps = {

};

const FeedItem = styled.div`
  width: 500px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  background: #fff;
`;

class HackerNews extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts('hackernews'));
  }

  render() {
    const { items } = this.props;

    return(
      <div>
        {items.map(item => (
          <FeedItem>
            <p>{item.title}</p>
            <a href={item.url} target="_blank">Link</a>
            <a href={`https://news.ycombinator.com/item?id=${item.id}`} target="_blank">HN Link</a>
          </FeedItem>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.postsByHackerNews
});

HackerNews.propTypes = propTypes;
HackerNews.defaultProps = defaultProps;

export default connect(mapStateToProps)(HackerNews);
