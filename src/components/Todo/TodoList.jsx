import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const TodoItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

function TodoList({
  auth,
  todos,
  onTodoClick,
  onDeleteClick,
  onEditClick,
  onEditActivateClick,
}) {
  return (
    <TodoItems>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onToggle={() => onTodoClick(todo.id, todo.dbKey, todo.completed, auth)}
          onDelete={() => onDeleteClick(todo.id, todo.dbKey, auth)}
          onEdit={(text) => onEditClick(todo.id, todo.dbKey, text, auth)}
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
