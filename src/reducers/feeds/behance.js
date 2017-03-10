import { createReducer } from '../util';

function retrievePost(behanceState, action) {
  return action.post.projects;
}

// Slice reducer
export const postsByBehance = createReducer([], {
  'RECEIVE_POSTS_BEHANCE': retrievePost,
});
