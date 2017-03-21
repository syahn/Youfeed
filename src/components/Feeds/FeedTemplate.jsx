import React from 'react';
import {
  PostTitle,
  PostHeader,
  PostCard,
  PostContent,
  Category,
  TagBox,
  OriginalLink
} from '../General';
import uuid from 'uuid';

const propTypes = {

};
const defaultProps = {

};

function FeedTemplate({ posts }) {
  return(
    <div>
    {posts.map(post => (
      <PostCard key={uuid()}>
        <PostTitle>
          <PostHeader>
            <img src={post.logo} />
            <a href={post.url} target="_blank">
              {post.title}
            </a>
          </PostHeader>
          {post.siteUrl &&
            <OriginalLink href={`${post.siteUrl}`} target="_blank">
              &#40;{post.siteUrl.split('/')[2]}&#41;
            </OriginalLink>
          }
        </PostTitle>
        <PostContent>
          {post.image &&
            <img src={post.image} alt='' />
          }
          {post.content}
        </PostContent>
        <TagBox>
          {post.category.length > 0 &&
            post.category.map(tag => (
            <Category key={tag}>{tag}</Category>
          ))}
        </TagBox>
        {post.time}
      </PostCard>
    ))}
    </div>
  );
}

FeedTemplate.propTypes = propTypes;
FeedTemplate.defaultProps = defaultProps;

export default FeedTemplate;
