import React, { PropTypes } from "react";
import uuid from "uuid";
import moment from "moment";
import { Tag, Icon } from "antd";
import styled from "styled-components";

const FeedTag = styled(Tag)`
  margin: 4px 8px 0 0 !important;

  i {
    margin-right: 4px;
  }
`;

const FeedIcon = styled(Icon)`
  i {
    margin-right: 3px;
  }
`;

import {
  TitleContainer,
  PostTitle,
  PostHeader,
  PostCard,
  PostContent,
  Category,
  TagBox,
  OriginalLink,
  LinkContainer
} from "../General";

const propTypes = {
  posts: PropTypes.array
};

function FeedTemplate({ posts, clickPost, showProvider }) {
  return (
    <div>
      {posts.map(post => {
        const published = moment(post.time * 1000).fromNow();

        return (
          <PostCard key={uuid()}>
            <TitleContainer>
              <PostHeader logo={post.logo}>
                <img src={post.logo} alt="" />
                {post.score &&
                  <FeedTag color="#108ee9">
                    <FeedIcon type="caret-up" />
                    {post.score || "0"}
                  </FeedTag>}
                {showProvider && <FeedTag>{post.provider}</FeedTag>}
              </PostHeader>
              <PostTitle href={post.url} onClick={clickPost} target="_blank">
                {post.title}
              </PostTitle>
              {post.siteUrl &&
                <LinkContainer>
                  <OriginalLink
                    href={`${post.siteUrl}`}
                    onClick={clickPost}
                    target="_blank"
                  >
                    ({post.siteUrl.split("/")[2]})
                  </OriginalLink>
                </LinkContainer>}
            </TitleContainer>
            <PostContent>
              {post.image && <img src={post.image} alt="" />}
              {post.content}
            </PostContent>
            <TagBox>
              {post.category &&
                post.category.length > 0 &&
                post.category.map(tag => <Category key={tag}>{tag}</Category>)}
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
