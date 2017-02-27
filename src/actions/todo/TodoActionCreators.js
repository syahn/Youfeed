import uuid  from 'uuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuid(),
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const editTodo = (id,text) => ({
  type: 'EDIT_TODO',
  id,
  text
});

export const editActivateTodo = id => ({
  type: 'EDIT_ACTIVATE_TODO',
  id
});
