import uuid  from 'uuid';
import { database, auth } from '../../firebaseApp';
import C from '../../constants';

export const getTodo = () => dispatch => {
  dispatch(getTodoRequestAction());
  return database.ref(`/todos/${auth.currentUser.uid}/`)
  .once('value', snap => {
    snap.forEach((childSnap) => {
      dispatch(getTodoFulfilledAction({
        key: childSnap.key,
        id: childSnap.val().id,
        text: childSnap.val().text,
        completed: childSnap.val().completed,
      }));
    });
  })
  .catch((error) => {
    console.log(error);
    dispatch(getTodoRejectedAction());
  });
};

export const appendTodo = (text, auth) => dispatch => {
  const newId = uuid();
  let newKey = {};
  let newTodo = {
    type: C.ADD_TODO,
    id: newId,
    key: newKey,
    text: text,
    completed: false,
  };
  if(auth.status == 'AUTH_LOGGED_IN'){
    dispatch(pushTodo(newTodo));
  } else {

    dispatch(newTodo);
  }
};

export const pushTodo = todo => dispatch => {
  dispatch(pushTodoRequestAction());
  const todosRef = database.ref(`/todos/${auth.currentUser.uid}/`).push();
  const newTodoKey = todosRef.key;
  todo.key = newTodoKey;
  dispatch(todo);
  delete todo.type;
  todosRef.set(todo)
  .catch((error) => {
    console.log(error);
    dispatch(pushTodoRejectedAction());
  });
};


export const toggleTodo = (id, key, completed, auth) => dispatch => {
  const newAction = {
    type: C.TOGGLE_TODO,
    id
  };

  if(auth.status == 'AUTH_LOGGED_IN'){
    dispatch(updateToggleTodo(newAction, completed, key));
  } else {
    dispatch(newAction);
  }
};

export const updateToggleTodo = (newAction, completed, key) => dispatch => {
  dispatch(newAction);
  dispatch(updateToggleTodoRequestAction());
  let newRef = database.ref(`/todos/${auth.currentUser.uid}/${key}/completed/`);
  newRef
  .set(!completed)
  .catch((error) => {
    console.log(error);
    dispatch(updateToggleTodoRejectedAction());
  });
};

export const deleteTodo = (id, key, auth) => dispatch => {
  const newAction = {
    type: C.DELETE_TODO,
    id
  };
  if(auth.status == 'AUTH_LOGGED_IN'){
    dispatch(removeTodo(newAction, key));
  } else {
    dispatch(newAction);
  }
};

export const removeTodo = (newAction, key) => dispatch => {
  dispatch(newAction);
  dispatch(deleteTodoRequestAction());
  return database.ref(`/todos/${auth.currentUser.uid}/${key}/`)
  .remove()
  .catch((error) => {
    console.log(error);
    dispatch(deleteTodoRejectedAction());
  });
};

export const editTodo = (id, key, text, auth) => dispatch => {
  const newAction = {
    type: C.EDIT_TODO,
    id,
    text
  };

  if(auth.status == 'AUTH_LOGGED_IN'){
    dispatch(updateTodo(newAction, key));
  } else {
    dispatch(newAction);
  }
};

export const updateTodo = (newAction, key) => dispatch => {
  dispatch(newAction);
  dispatch(updateTodoRequestAction());
  return database.ref(`/todos/${auth.currentUser.uid}/${key}/text/`)
  .set(newAction.text)
  .catch((error) => {
    console.log(error);
    dispatch(updateTodoRejectedAction());
  });
};

export const setVisibilityFilter = filter => ({
  type: C.SET_VISIBILITY_FILTER,
  filter
});

export const editActivateTodo = id => ({
  type: C.EDIT_ACTIVATE_TODO,
  id
});

export const getTodoRequestAction = () => ({
  type: C.GET_REQUESTED_TODO
});

export const getTodoRejectedAction = () => ({
  type: C.GET_REJECTED_TODO
});

export const getTodoFulfilledAction = todo => ({
  type: C.GET_FULFILLED_TODO,
  id: todo.id,
  key: todo.key,
  text: todo.text,
  completed: todo.completed
});

export const pushTodoRequestAction = () => ({
  type: C.PUSH_REQUESTED_TODO
});

export const pushTodoRejectedAction = () => ({
  type: C.PUSH_REJECTED_TODO
});

export const updateTodoRequestAction = () => ({
  type: C.UPDATE_REQUESTED_TODO
});

export const updateTodoRejectedAction = () => ({
  type: C.UPDATE_REJECTED_TODO
});

export const deleteTodoRequestAction = () => ({
  type: C.DELETE_REQUESTED_TODO
});

export const deleteTodoRejectedAction = () => ({
  type: C.DELETE_REJECTED_TODO
});

export const updateToggleTodoRequestAction = () => ({
  type: C.UPDATE_TOGGLE_REQUESTED_TODO
});

export const updateToggleTodoRejectedAction = () => ({
  type: C.UPDATE_TOGGLE_REJECTED_TODO
});
