import React from 'react';
import styled from 'styled-components';
import { Card } from '../ui-components/General';
import UpdateMemo from '../../containers/memo/UpdateMemo';

const MemoTitle = styled.p`
  margin-bottom: 10px;
`;

function MemoBox() {
  return(
    <Card>
      <MemoTitle>
        Memopad
      </MemoTitle>
      <UpdateMemo />
    </Card>
  );
}

export default MemoBox;
