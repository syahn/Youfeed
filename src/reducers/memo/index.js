import { updateObject, createReducer } from '../util';

function getMemo(memoState, action) {
 return updateObject(memoState, { text : action.text });
}

function editMemo(memoState, action) {
 return updateObject(memoState, { text : action.text });
}

// Slice reducer
export const memo = createReducer([], {
  'EDIT_MEMO': editMemo,
  'GET_MEMO': getMemo
});
