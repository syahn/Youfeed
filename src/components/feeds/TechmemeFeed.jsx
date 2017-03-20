import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { FeedCard, TagBox, Category } from '../General';

const FeedItemHeader = styled.h3`
  a {
    margin-bottom: 8px;
    color: #495057;
  }
`;

const propTypes = {
  posts: PropTypes.array
};

function TechmemeFeed({ posts }) {
  let list;
  list = posts.map(item => {
    const published = new Date(item.published * 1000);

    return (
      <FeedCard key={item.id}>
        <FeedItemHeader>
          <a href={item.id} target="_blank">
            {item.title}
          </a>
        </FeedItemHeader>
        <TagBox>
          <Category>
            {published.toLocaleString()}
          </Category>
        </TagBox>
      </FeedCard>
      );
  });


  return(
    <div>
      {list || <Spin size="large" />}
    </div>
  );
}

TechmemeFeed.propTypes = propTypes;

export default TechmemeFeed;
