import { createReducer } from '../util';

function retrievePosts(rssState = {}, action) {
  const { url, post } = action;
  let newObj = { [url]: post };
  return Object.assign({}, rssState, newObj);
}

// Slice reducer
export const postsByRSS = createReducer({}, {
  'RECEIVE_POSTS_RSS': retrievePosts,
});
