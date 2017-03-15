import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ColCategory from '../ui-components/ColCategory';

const propTypes = {
  children: PropTypes.node.isRequired
};

const ContentWrapper = styled.div`
  width: 512px;
  padding-right: 10px;
`;

function FeedContent(props) {
  return(
    <ContentWrapper>
      <ColCategory
        color="blue"
        name="News Feed"
      />
      {props.children}
    </ContentWrapper>
  );
}

FeedContent.propTypes = propTypes;

export default FeedContent;
