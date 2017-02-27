import { connect } from 'react-redux';
import {
  toggleTodo,
  deleteTodo,
  editTodo,
  editActivateTodo
} from '../../actions/todo/TodoActionCreators';
import TodoList from '../../components/todos/TodoList';

// VisibleTodoList that subscribes to the Redux store and knows how to apply the current visibility filter.
// VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList.

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

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.ui.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onDeleteClick: (id) => {
      dispatch(deleteTodo(id));
    },
    onEditClick: (id, text) => {
      dispatch(editTodo(id, text));
    },
    onEditActivateClick: (id) => {
      dispatch(editActivateTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
