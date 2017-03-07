import React, { PropTypes } from 'react';
import { FeedCard } from '../ui-components/General';
import styled from 'styled-components';
import { Spin } from 'antd';

const HackerNewsLink = styled.a`
  font-size: 18px;
`;

const OriginalLink = styled.a`
  color: #868e96;

  &:hover {
    text-decoration: underline;
    color: #868e96;
  }
`;

const propTypes = {
  posts: PropTypes.array
};

function HackerNewsFeed({ posts }) {
  let list;
  if(posts.length === 10){
    list = posts.sort((a, b) => {
      return b.score - a.score;
    }).map(item => (
      <FeedCard>
        <HackerNewsLink href={`https://news.ycombinator.com/item?id=${item.id}`} target="_blank">
          {item.title}
        </HackerNewsLink>
        &nbsp;&#40;
        <OriginalLink href={`${item.url}`} target="_blank">
          {item.url.split('/')[2]}
        </OriginalLink>
        &#41;
        <p></p>
        <p>score: {item.score}</p>
      </FeedCard>
    ));
  }

  return(
    <div>
      {list || <Spin size="large" />}
    </div>
  );
}

HackerNewsFeed.propTypes = propTypes;

export default HackerNewsFeed;
