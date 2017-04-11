import uuid from 'uuid';
import { createReducer, swapIndices } from '../util';
/**
 * Case reducer
 * Add widget to list of widgets
 */
function addWidget(widgetState, action){
  return widgetState.concat({
    type: action.type,
    id: action.id
  });
}

/**
 * Case reducer
 * Set list of widgets from db
 */
function getWidget(widgetState, action){
  return action.widgets || widgetState;
}

/**
 * Case reducer
 * Move widget in different order
 */
function moveWidget(widgetState, action){
  const from = widgetState.findIndex((widget) => {
    return widget.id == action.from;
  });
  const to = widgetState.findIndex((widget) => {
    return widget.id == action.to;
  });

  return swapIndices(widgetState, from, to);
}


export const widgets = createReducer(
  [
    {type: 'todo', id: uuid()},
    {type: 'randomquote', id: uuid()},
    {type: 'memo', id: uuid()},
    {type: 'calculator', id: uuid()},
    {type: 'pomodoro', id: uuid()},
  ], {
  'ADD_WIDGET': addWidget,
  'MOVE_WIDGET': moveWidget,
  'SET_WIDGET': getWidget
});
