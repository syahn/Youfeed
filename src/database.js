import uuid from 'uuid';

//TODO: remove it
const initialState = {
  todos: [],
  memo: '',
  widgets: [
    {type: 'todo', id: uuid()},
    {type: 'memo', id: uuid()},
    {type: 'calculator', id: uuid()},
    {type: 'pomodoro', id: uuid()},
  ]
};

export default initialState;
