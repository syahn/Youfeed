/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import FeedSelect from '../../containers/FeedSelect';
import C from '../../constants';

const propTypes = {

};

const Col = styled.div`
  padding: 12px;
  width: 180px;
  height: 100%;
`;

function FeedControl(props) {
  return (
      <Col>
        <FeedSelect />
      </Col>
  );
}

FeedControl.propTypes = propTypes;

export default FeedControl;
