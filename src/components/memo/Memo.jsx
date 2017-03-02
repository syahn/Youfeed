import React, { PropTypes } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const propTypes = {
  memo: PropTypes.string,
  auth: PropTypes.object,
  onUpdateMemo: PropTypes.func
};

const MemoInput = styled(Input)`
  background: beige !important;
`;

function Memo({memo, auth, onUpdateMemo}) {
  return(
    <MemoInput
      type="textarea"
      rows={8}
      value={memo}
      spellCheck="false"
      onChange={(e)=>onUpdateMemo(e.target.value, auth)}
    >
  </MemoInput>
  );
}

Memo.propTypes = propTypes;

export default Memo;
