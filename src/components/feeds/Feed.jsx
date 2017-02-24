import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {

};
const defaultProps = {

};


const FeedItem = styled.div`
  width: 500px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  background: #fff;
`;

const FeedItemHeader = styled.h2`
  padding-bottom: 10px;
    img {
      width: 20px;
      margin: 10px 8px 0 0;
    }
`;

function Feed({ story }) {
  let source = {
    title: "",
    url: "",
    icon: "",
    text: ""
  };
  if(story.source) {
    source.title = story.source.title;
    source.icon = "http://www.google.com/s2/favicons?domain=" + encodeURIComponent(story.source.permalinkUrl);
    source.url = story.source.permalinkUrl;
    source.text = story.summary;
  }

  return(
    <FeedItem>
      <a href={story.permalinkUrl} className="list-group-item">
        <FeedItemHeader>
          <img src={source.icon} />
          {story.title}
        </FeedItemHeader>
        <div>
          {ReactHtmlParser(source.text)}
        </div>
        <span className="source">
          {source.title}
        </span>
      </a>
    </FeedItem>
  );
}

Feed.propTypes = propTypes;
Feed.defaultProps = defaultProps;

export default Feed;
