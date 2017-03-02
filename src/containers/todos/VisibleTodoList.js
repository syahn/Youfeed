import { connect } from 'react-redux';
import {
  toggleTodo,
  deleteTodo,
  editTodo,
  editActivateTodo,
} from '../../actions/todo/TodoActionCreators';
import TodoList from '../../components/todos/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.ui.visibilityFilter),
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  {
    onTodoClick: toggleTodo,
    onDeleteClick: deleteTodo,
    onEditClick: editTodo,
    onEditActivateClick: editActivateTodo,
  }
)(TodoList);

export default VisibleTodoList;
