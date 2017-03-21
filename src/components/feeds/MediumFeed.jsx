import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { FeedCard, CenterSpin, TagBox, Category } from '../General';

const FeedItemHeader = styled.h2`
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;

    img {
      width: 30px;
      margin-right: 5px;
    }
    a {
      color: #495057;
    }
`;

const Summary = styled.div`
  margin-bottom: 10px;
  img {
    width: 100%;
    margin: 10px 0;
  }
`;

const propTypes = {
  posts: PropTypes.array
};

function MediumFeed({ posts }) {
  let list;
  if(posts.length > 0){
    list = posts.map(item => {
      let summary = '';
      if (item.content) {
        summary = <Summary>{ReactHtmlParser(item.content.split('</p>')[0])}</Summary>;
      } else if (item.summary) {
        summary = <Summary>{ReactHtmlParser(item.summary)}</Summary>;
      }
      return (
        <FeedCard key={item.id}>
          <FeedItemHeader>
            <img src={item.source.image} />
            <a href={item.permalinkUrl} target="_blank">
              {item.title}
            </a>
          </FeedItemHeader>
          {summary}
          <TagBox>
            { item.categories &&
              item.categories.map(tag => (
              <Category key={tag}>{tag}</Category>
            ))}
          </TagBox>
        </FeedCard>
        );
    });
  }

  return(
    <div>
      {list || <CenterSpin size="large" />}
    </div>
  );
}

MediumFeed.propTypes = propTypes;

export default MediumFeed;
