import { createReducer } from '../util';

function retrievePost(behanceState, action) {
  return action.post;
}

// Slice reducer
export const postsByBehance = createReducer([], {
  'RECEIVE_POSTS_BEHANCE': retrievePost,
});
