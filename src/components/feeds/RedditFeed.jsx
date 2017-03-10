import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FeedCard, PostHeader, Category, TagBox } from '../ui-components/General';
import { Icon } from 'antd';

const Domain = styled.span`
  color: #868e96;
  font-size: 14px;
`;

const propTypes = {
  posts: PropTypes.array.isRequired
};

function RedditFeed({ posts }) {
  return (
    <div>
      {posts.map((post) =>
        <FeedCard key={post.id}>
          <PostHeader>
            <Category color='blue'>
              <Icon type="caret-up" />
              &nbsp;
              {post.ups}
            </Category>
            <a href={post.url} target="_blank">
              {post.title}
              <Domain>
               &nbsp;
               ({post.domain})
             </Domain>
            </a>
          </PostHeader>
            <TagBox>
              <Category>
                <a href={`https://www.reddit.com/${post.permalink}`}>
                  {post.num_comments} comments
                </a>
              </Category>
            </TagBox>
        </FeedCard>
      )}
    </div>
  );
}

RedditFeed.propTypes = propTypes;

export default RedditFeed;
