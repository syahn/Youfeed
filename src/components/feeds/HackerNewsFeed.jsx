import React, { PropTypes } from 'react';
import { FeedCard, TagBox, Category } from '../ui-components/General';
import styled from 'styled-components';
import { Spin } from 'antd';

const HackerNewsHeader = styled.h2`
  a {
    color: #495057;
  }
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
      <FeedCard key={item.id}>
        <HackerNewsHeader>
          <a href={`https://news.ycombinator.com/item?id=${item.id}`} target="_blank">
            {item.title}
          </a>
        </HackerNewsHeader>
        &#40;
        <OriginalLink href={`${item.url}`} target="_blank">
          {item.url.split('/')[2]}
        </OriginalLink>
        &#41;
        <TagBox>
          <Category>
            score:{item.score}
          </Category>
        </TagBox>
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
