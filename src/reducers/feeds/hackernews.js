import { addItemInArray, createReducer } from '../util';

function retrievePost(hackernewsState, action) {
  return addItemInArray(hackernewsState, action.post);
}

// Slice reducer
export const postsByHackerNews = createReducer([], {
  'RECEIVE_POSTS_HACKERNEWS': retrievePost,
});
