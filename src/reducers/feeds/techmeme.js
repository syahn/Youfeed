import { createReducer } from '../util';

function retrievePost(mediumState, action) {

  return action.post.items;
}

// Slice reducer
export const postsByTechmeme = createReducer([], {
  'RECEIVE_POSTS_TECHMEME': retrievePost,
});
