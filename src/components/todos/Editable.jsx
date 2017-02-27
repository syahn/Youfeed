import React from 'react';
import Edit from './Edit';
import styled from 'styled-components';

const TodoText = styled.span`
  display: block;
  width: 219px;
  height: 25px;
  overflow:hidden;
  border-bottom: 1px solid rgba(0,0,0,.12);
  text-align: left;
`;

function Editable({onEdit, editing, text}) {
  if(editing) {
    return (
      <Edit
        text={text}
        editing={editing}
        onEdit={onEdit}
      />
    );
  }
  return (
    <TodoText>
      {text}
    </TodoText>
  );
}

export default Editable;
