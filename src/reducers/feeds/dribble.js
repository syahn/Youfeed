import { createReducer } from '../util';

function retrievePost(dribbleState, action) {
  return action.post;
}

// Slice reducer
export const postsByDribble = createReducer([], {
  'RECEIVE_POSTS_DRIBBLE': retrievePost,
});
