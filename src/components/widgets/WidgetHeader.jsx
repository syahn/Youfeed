import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Icon } from 'antd';

const propTypes = {
  name: PropTypes.string
};

const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
  background: #868e96;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 3px 8px;
`;

const Name = styled.span`
  margin-left: 6px;
`;

function WidgetHeader({ name, type, icon }) {
  return(
    <HeaderContainer>
      {type === "antd"
      ?
      <Icon type={icon} />
      :
      <FontAwesome name={icon} />
      }
      <Name>{name}</Name>
    </HeaderContainer>
  );
}

WidgetHeader.propTypes = propTypes;

export default WidgetHeader;
