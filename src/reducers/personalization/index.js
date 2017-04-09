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

// Slice reducer
export const personalization = createReducer({
  'medium': 0,
  'hacker-news': 0,
  'behance': 0,
  'dribble': 0,
  'reddit': 0,
  'techmeme': 0
}, {
  'CLICK_PERSONALIZATION': addCount,
  'SET_PERSONALIZATION': setCount,
  'DOWNLOAD_PERSONALIZATION': getCount,
});
