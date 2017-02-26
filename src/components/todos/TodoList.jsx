import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const TodoItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

function TodoList({
  todos,
  onTodoClick,
  onDeleteClick,
  onEditClick,
  onEditActivateClick
}) {
  return (
    <TodoItems>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onToggle={() => onTodoClick(todo.id)}
          onDelete={() => onDeleteClick(todo.id)}
          onEdit={(text) => onEditClick(todo.id, text)}
          onEditActivate={() => onEditActivateClick(todo.id)}
        />
      )}
    </TodoItems>
  );
}


// TODO
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default TodoList;
