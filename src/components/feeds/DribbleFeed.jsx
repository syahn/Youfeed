import React, { PropTypes } from 'react';
import { PostHeader, TagBox, Category } from '../ui-components/General';
import styled from 'styled-components';
import { Spin, Icon } from 'antd';


const FeedItem = styled.div`
  width: 500px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  background: #fff;

  img {
    width: 100%;
  }
`;

const propTypes = {
  posts: PropTypes.array
};

function BehanceFeed({ posts }) {
  let list;
  list = posts.map( item => (
    <FeedItem key={item.id}>
      <PostHeader>
        <Category color="blue">
          <Icon type="caret-up" />
          &nbsp;
          {item.likes_count}
        </Category>
        <a href={item.html_url} alt="Behance URL" target="_blank">{item.title}</a>
      </PostHeader>
      <img src={item.images.normal} alt="cover" />
      <TagBox>
        {item.tags.map( tag => (
          <Category key={tag}>{tag}</Category>
        ))}
      </TagBox>
    </FeedItem>
  ));

  return(
    <div>
      { list || <Spin /> }
    </div>
  );
}

BehanceFeed.propTypes = propTypes;

export default BehanceFeed;
