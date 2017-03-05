import React from 'react';
import { connect } from 'react-redux';
import { appendTodo } from '../../actions/todo/TodoActionCreators';
import { Button } from 'antd';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  position: relative;
  display: inline-block;
  width: 85%;
  padding: 4px 7px;
  height: 28px;
  cursor: text;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.66);
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all .3s;
  transition: all .3s;
  outline: none;
`;

const AddButton = styled(Button)`
  span {
    position: relative;
    bottom: 1px;
  }
`;

function AddTodo({ dispatch }) {
  let input;

  return (
    <Form
      onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(appendTodo(input.value));
      input.value = '';
    }}>
      <Input
        placeholder=" Add todo"
        spellcheck="false"
        innerRef={ node => { input = node; }}
      />
      <AddButton
        htmlType="submit"
        shape="circle"
      >
        +
      </AddButton>
    </Form>
  );
}

export default connect()(AddTodo);
