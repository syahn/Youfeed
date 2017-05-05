import { createReducer } from "../util";

function retrievePosts(rssState = {}, action) {
  const { url, post } = action;
  if (action.post.items.length > 0) {
    let newObj = { [url]: post };
    return Object.assign({}, rssState, newObj);
  }
  return rssState;
}


// Slice reducer
export const postsByRSS = createReducer(
  {},
  {
    RECEIVE_POSTS_RSS: retrievePosts,
  }
);
