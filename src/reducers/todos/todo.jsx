import { updateObject,
         updateItemInArray,
         deleteItemInArray,
         createReducer } from '../util';


// Handler for a specific case ("case reducer")
function setVisibilityFilter(visibilityState, action) {
    // Technically, we don't even care about the previous state
    return action.filter;
}

// Handler for an entire slice of state ("slice reducer")
export const visibilityFilter = createReducer('SHOW_ALL', {
    'SET_VISIBILITY_FILTER' : setVisibilityFilter
});


// Case reducer
function addTodo(todosState, action) {
  const newTodos = [{
    id: action.id,
    text: action.text,
    completed: false
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
    'ADD_TODO' : addTodo,
    'TOGGLE_TODO' : toggleTodo,
    'DELETE_TODO' : deleteTodo,
    'EDIT_TODO' : editTodo,
    'EDIT_ACTIVATE_TODO' : editActivateTodo
});
