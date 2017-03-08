import { createReducer } from '../util';

function retrievePost(mediumState, action) {

  return action.post.items;
}

// Slice reducer
export const postsByMedium = createReducer([], {
  'RECEIVE_POSTS_MEDIUM': retrievePost,
});
