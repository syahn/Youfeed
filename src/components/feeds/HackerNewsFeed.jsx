import React, { PropTypes } from 'react';
import { PostHeader, FeedCard, Category, OriginalLink } from '../ui-components/General';
import { Spin, Icon } from 'antd';

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
        <PostHeader>
          <Category color="blue">
            <Icon type="caret-up" />
            &nbsp;
            {item.score}
          </Category>
          <a href={`https://news.ycombinator.com/item?id=${item.id}`} target="_blank">
            {item.title}
          </a>
        </PostHeader>
        &#40;
        <OriginalLink href={`${item.url}`} target="_blank">
          {item.url.split('/')[2]}
        </OriginalLink>
        &#41;
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
