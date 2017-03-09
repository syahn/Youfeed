import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
};

const Tag = styled.div`
  background: ${props => props.color === 'blue' ? '#108EE9' : '#868e96'};
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 3px 8px;
  margin-bottom: 6px;

  i {
    margin-right: 3px;
  }
`;

function ColCategory({ name, color }) {
  return(
    <Tag color={color}>
      <Icon type="down-square" />
      { name }
    </Tag>
  );
}

ColCategory.propTypes = propTypes;

export default ColCategory;
