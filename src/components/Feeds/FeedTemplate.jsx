import React, { PropTypes } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import {
  TitleContainer,
  PostTitle,
  PostHeader,
  PostCard,
  PostContent,
  Category,
  TagBox,
  Icon_,
  Tag_,
  OriginalLink,
  LinkContainer
} from '../General';

const propTypes = {
  posts: PropTypes.array
};

function FeedTemplate({ posts, clickPost, showProvider }) {
  return(
    <div>
    {posts.map(post => {
      const published = moment(post.time * 1000).fromNow();

      return (
        <PostCard key={uuid()}>
          <TitleContainer>
            <PostHeader logo={post.logo}>
              <img src={post.logo} alt="" />
              {post.score &&
                <Tag_ color="#108ee9">
                  <Icon_ type="caret-up" />
                  {post.score || '0'}
                </Tag_>}
              {showProvider &&
                <Tag_>{post.provider}</Tag_>}
            </PostHeader>
            <PostTitle href={post.url} onClick={clickPost} target="_blank">
              {post.title}
            </PostTitle>
            {post.siteUrl &&
              <LinkContainer>
                <OriginalLink href={`${post.siteUrl}`} onClick={clickPost} target="_blank">
                  &#40;{post.siteUrl.split('/')[2]}&#41;
                </OriginalLink>
              </LinkContainer>
            }
          </TitleContainer>
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
          {published}
        </PostCard>
      );
    })}
    </div>
  );
}

FeedTemplate.propTypes = propTypes;

export default FeedTemplate;
