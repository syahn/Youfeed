import { updateObject, createReducer } from '../util';

function addCategoryCount(personalState, action) {
  return updateObject(personalState,
    {[action.subscription]: {
      postClick: personalState[action.subscription].postClick,
      categoryClick: personalState[action.subscription].categoryClick + 1
    }});
}

function addPostCount(personalState, action) {
  return updateObject(personalState,
    {[action.post]: {
      postClick: personalState[action.post].postClick + 1,
      categoryClick: personalState[action.post].categoryClick
    }});
}

function setCategoryCount(personalState, action) {
  console.log(action);
  return updateObject(personalState,
    {[action.subscription]: {
      categoryClick: 1,
      postClick: 0
    }});
}

function getCount(personalState, action) {
  return updateObject(personalState, action.val);
}

// Slice reducer
export const personalization = createReducer({
  'medium': { postClick: 0, categoryClick: 0 },
  'hacker-news': { postClick: 0, categoryClick: 0 },
  'behance': { postClick: 0, categoryClick: 0 },
  'dribble': { postClick: 0, categoryClick: 0 },
  'reddit': { postClick: 0, categoryClick: 0 },
  'techmeme': { postClick: 0, categoryClick: 0 }
}, {
  'CLICK_CATEGORY': addCategoryCount,
  'CLICK_POST': addPostCount,
  'SET_CATEGORY': setCategoryCount,
  'DOWNLOAD_COUNT': getCount,
});
