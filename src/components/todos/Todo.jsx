import React, { Component } from 'react';
import Editable from './Editable';
import { Checkbox } from 'antd';
import styled from 'styled-components';

const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 243px;
  margin-top: 8px;

  &:hover {
    button {
      display: block;
    }
  }
`;

const DeleteButton = styled.button`
  display: none;
  border: none;
  background: #fff;
  outline: none;
  margin-left: 3px;
`;

const TodoText = styled.li`
  text-decoration: ${props => props.completed ? 'line-through' : 'none'}
`;

class Todo extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const {
      onEditActivate,
      onToggle,
      onDelete,
      onEdit,
      completed,
      editing,
      text,
      id
    } = this.props;

    return (
      <TodoItem>
        <Checkbox
          defaultChecked={completed}
          onClick={onToggle}
        />
        <TodoText
          onClick={onEditActivate}
          completed={completed}
        >
          <Editable
            editing={editing}
            onEdit={onEdit}
            text={text}
            id={id}
          />
        </TodoText>
        <DeleteButton
          className="todo__delete"
          shape="circle"
          onClick={onDelete}
        >
          x
        </DeleteButton>
      </TodoItem>
    );
  }
}
//
// Todo.propTypes = {
//   onToggle: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Todo;
