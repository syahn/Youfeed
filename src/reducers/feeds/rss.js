import { createReducer } from '../util';

function retrieveLists(rssState, action) {
  return action.lists || rssState;
}

// Slice reducer
export const subscription = createReducer([], {
  'RECEIVE_SUBSCRIPTION_LIST': retrieveLists,
});
