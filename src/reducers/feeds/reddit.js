import C from '../../constants';


const posts = (state, action) => {
  switch (action.type) {
    case C.INVALIDATE_REDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    case C.REQUEST_POSTS_REDDIT:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case C.RECEIVE_POSTS_REDDIT:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
      };
    default:
      return state;
  }
};

export const postsByReddit = (state = {
  items: [],
  isFetching: false,
  didInvalidate: false
}, action) => {
  switch (action.type) {
    case C.INVALIDATE_REDDIT:
    case C.RECEIVE_POSTS_REDDIT:
    case C.REQUEST_POSTS_REDDIT:
      return posts(state, action);
    default:
      return state;
  }
};
