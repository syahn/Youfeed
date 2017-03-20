import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { PostHeader, TagBox, Category, CenterSpin } from '../General';


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
  if(posts.length > 0){
    list = posts.map( item => (
      <FeedItem key={item.id}>
        <PostHeader>
          <Category color="blue">
            <Icon type="caret-up" />
            &nbsp;
            {item.stats.appreciations}
          </Category>
          <a href={item.url} alt="Behance URL" target="_blank">{item.name}</a>
        </PostHeader>
        <img src={item.covers.original} alt="cover" />
        <TagBox>
          {item.fields.map( tag => (
            <Category key={tag}>{tag}</Category>
          ))}
        </TagBox>
      </FeedItem>
    ));
  }

  return(
    <div>
      { list || <CenterSpin size="large" /> }
    </div>
  );
}

BehanceFeed.propTypes = propTypes;

export default BehanceFeed;
