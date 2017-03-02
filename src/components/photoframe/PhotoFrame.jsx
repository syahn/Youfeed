import React from 'react';
import styled from 'styled-components';
import { Card } from '../ui-components/General';

const propTypes = {

};
const defaultProps = {

};

const Frame = styled(Card)`

`;



function PhotoFrame() {
  return(
    <Frame>
      <img src="http://placekitten.com/284/284" alt="cat" />
    </Frame>
  );
}

PhotoFrame.propTypes = propTypes;
PhotoFrame.defaultProps = defaultProps;

export default PhotoFrame;
