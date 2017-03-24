import { updateObject,
         updateItemInArray,
         deleteItemInArray,
         createReducer } from '../util';

function addTodo(todosState, action) {
  const newTodos = [{
    id: action.id,
    text: action.text,
    dbKey: action.key,
    completed: action.completed
  }];

  return newTodos.concat(todosState);
}

function getTodo(todosState, action) {
  const newTodos = [{
    id: action.id,
    text: action.text,
    dbKey: action.key,
    completed: action.completed
  }];

  return newTodos.concat(todosState);
}

// Case reducer
function toggleTodo(todosState, action) {
  const newTodos = updateItemInArray(todosState, action.id, todo => {
    return updateObject(todo, {completed : !todo.completed});
  });

  return newTodos;
}


// Case reducer
function deleteTodo(todosState, action) {
  return deleteItemInArray(todosState, action.id);
}

// Case reducer
function editTodo(todosState, action) {
  const newTodos = updateItemInArray(todosState, action.id, todo => {
    return updateObject(todo, {text : action.text, editing:!todo.editing});
  });

  return newTodos;
}

// Case reducer
function editActivateTodo(todosState, action) {
  const newTodos = updateItemInArray(todosState, action.id, todo => {
    return updateObject(todo, {editing : !todo.editing});
  });

  return newTodos;
}

// Slice reducer
export const todos = createReducer([], {
  'ADD_TODO': addTodo,
  'TOGGLE_TODO': toggleTodo,
  'DELETE_TODO': deleteTodo,
  'EDIT_TODO': editTodo,
  'EDIT_ACTIVATE_TODO': editActivateTodo,
  'GET_FULFILLED_TODO': getTodo
});
