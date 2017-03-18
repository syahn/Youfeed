import React, {  } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { PostHeader, FeedCard } from '../ui-components/General';

const propTypes = {

};

function Feed({ post }) {
  let source = {
    title: "",
    url: "",
    icon: "",
    text: ""
  };
  if(post.source){
    source.title = post.source.title;
    source.icon = post.source.image;
    source.url = post.source.permalinkUrl;
    source.text = post.summary || post.content;
  }

  return(
    <FeedCard>
      <PostHeader>
        <img src={source.icon} />
        <a href={post.permalinkUrl} target="_blank">{post.title}</a>
      </PostHeader>
      <div>
        {ReactHtmlParser(source.text)}
      </div>
      <span className="source">
        {source.title}
      </span>
    </FeedCard>
  );
}

Feed.propTypes = propTypes;

export default Feed;
