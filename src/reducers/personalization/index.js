import { updateObject, createReducer } from "../util";

function addCategoryCount(state, action) {
  if (state.hasOwnProperty(action.subscription)) {
    return updateObject(state, {
      [action.subscription]: {
        postClick: state[action.subscription].postClick,
        categoryClick: state[action.subscription].categoryClick + 1
      }
    });
  } else {
    return updateObject(state, {
      [action.subscription]: {
        postClick: 0,
        categoryClick: 1
      }
    });
  }
}

function addPostCount(personalState, action) {
  return updateObject(personalState, {
    [action.post]: {
      postClick: personalState[action.post].postClick + 1,
      categoryClick: personalState[action.post].categoryClick
    }
  });
}

function setCategoryCount(personalState, action) {
  return updateObject(personalState, {
    [action.subscription]: {
      categoryClick: 1,
      postClick: 0
    }
  });
}

function getCount(personalState, action) {
  return updateObject(personalState, action.val);
}

function initializeCount(personalState, action) {
  return updateObject(personalState, {
    [action.subscription]: {
      categoryClick: 1,
      postClick: 0
    }
  });
}

// Slice reducer
export const personalization = createReducer(
  {
    "medium": { postClick: 0, categoryClick: 1 },
    "hacker-news": { postClick: 0, categoryClick: 1 },
    "behance": { postClick: 0, categoryClick: 1 },
    "dribble": { postClick: 0, categoryClick: 1 },
    "techmeme": { postClick: 0, categoryClick: 1 }
  },
  {
    CLICK_CATEGORY: addCategoryCount,
    CLICK_POST: addPostCount,
    SET_CATEGORY: setCategoryCount,
    DOWNLOAD_COUNT: getCount,
    INITIALIZE_CATEGORY: initializeCount
  }
);
