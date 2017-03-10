import fetch from 'isomorphic-fetch';
import C from '../../constants';

export const selectReddit = reddit => ({
  type: C.SELECT_REDDIT,
  reddit
});

// export const invalidateReddit = reddit => ({
//   type: C.INVALIDATE_REDDIT,
//   reddit
// });

export const requestPosts = reddit => ({
  type: C.REQUEST_POSTS_REDDIT,
  reddit
});

export const receivePosts = (reddit, json) => ({
  type: C.RECEIVE_POSTS_REDDIT,
  reddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

const fetchPosts = reddit => dispatch => {
  dispatch(requestPosts(reddit));
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)));
};

const shouldFetchPosts = (state, reddit) => {
  const posts = state.postsByReddit[reddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), reddit)) {
    return dispatch(fetchPosts(reddit));
  }
};
