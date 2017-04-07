import React, { PropTypes } from 'react';
import styled from 'styled-components';
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
  cursor: move;
`;

const Name = styled.span`
  margin-left: 6px;
`;

function WidgetHeader({ name, icon }) {
  return(
    <HeaderContainer>
      <Icon type={icon} />
      <Name>{name}</Name>
    </HeaderContainer>
  );
}

WidgetHeader.propTypes = propTypes;

export default WidgetHeader;
