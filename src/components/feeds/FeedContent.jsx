import React, { PropTypes } from "react";
import styled from "styled-components";
import { Icon } from "antd";

const propTypes = {
  children: PropTypes.node.isRequired
};

const ContentWrapper = styled.div`
  width: 523px;

  @media only screen and (max-width: 1120px) {
    width: 100%;
  }
`;

const Tag = styled.div`
  background: #108EE9;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 3px 8px;
  margin-bottom: 6px;

  i {
    margin-right: 3px;
  }
`;

function FeedContent({ currentFeed, auth, children }) {
  const routes = children.props.routes;
  if (!routes[1].path) currentFeed = "Personalized Feeds";
  else if (routes[1].path === "/feedsbytime") currentFeed = "Feeds By Time";
  else if (auth.status === "AUTH_ANONYMOUS") {
    let rawFeed = routes[1].path.split("/")[1];
    currentFeed = rawFeed[0].toUpperCase() + rawFeed.slice(1);
  } else currentFeed = currentFeed[0].toUpperCase() + currentFeed.slice(1);

  return (
    <ContentWrapper>
      <Tag color="blue">
        <Icon type="down-square" />
        <span>News Feeds: {currentFeed}</span>
      </Tag>
      {children}
    </ContentWrapper>
  );
}

FeedContent.propTypes = propTypes;

export default FeedContent;
