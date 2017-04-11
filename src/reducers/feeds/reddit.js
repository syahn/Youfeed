import C from '../../constants';

const posts = (state, action) => {
  switch (action.type) {
    case C.RECEIVE_POSTS_REDDIT:
      return action.posts;
    default:
      return state;
  }
};

export const postsByReddit = (state = [], action) => {
  switch (action.type) {
    case C.INVALIDATE_REDDIT:
    case C.RECEIVE_POSTS_REDDIT:
    case C.REQUEST_POSTS_REDDIT:
      return posts(state, action);
    default:
      return state;
  }
};
