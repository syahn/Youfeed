import React from 'react';
import Todo from './Todo';

// TodoList is a list showing visible todos.
//
// todos: Array is an array of todo items with { id, text, completed } shape.
// onTodoClick(id: number) is a callback to invoke when a todo is clicked.

const TodoList = ({ todos, onTodoClick, onDeleteClick, onEditClick, onEditActivateClick }) => (

  <ul className="todo__items">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        id={todo.id}
        {...todo}
        onToggle={() => onTodoClick(todo.id)}
        onDelete={() => onDeleteClick(todo.id)}
        onEdit={(text) => onEditClick(todo.id, text)}
        onEditActivate={() => onEditActivateClick(todo.id)}
      />
    )}
  </ul>
);


// // TODO
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default TodoList;
