import React, { PropTypes } from 'react';
import {
  FeedCard,
  PostHeader,
  TagBox,
  Category,
  CenterSpin
} from '../ui-components/General';
import { Icon } from 'antd';

const propTypes = {
  posts: PropTypes.array
};

function BehanceFeed({ posts }) {
  let list;
  if(posts.length > 0){
    list = posts.map( item => (
      <FeedCard key={item.id}>
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
      </FeedCard>
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
