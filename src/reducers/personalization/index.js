import { updateObject, createReducer } from '../util';

function addCount(personalState, action) {
  return updateObject(personalState,
    {[action.subscription]: personalState[action.subscription] + 1});
}

function setCount(personalState, action) {
  return updateObject(personalState,
    {[action.subscription]: 1});
}

function getCount(personalState, action) {
  return updateObject(personalState, action.val);
}
s
// Slice reducer
export const personalization = createReducer({
  'medium': 0,
  'hacker-news': 0,
  'behance': 0,
  'dribble': 0,
  'reddit': 0,
  'techmeme': 0
}, {
  'CLICK_CATEGORY': addCount,
  'SET_CATEGORY': setCount,
  'DOWNLOAD_CATEGORY': getCount,
});
