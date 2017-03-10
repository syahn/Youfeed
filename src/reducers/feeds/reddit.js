import C from '../../constants';


const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
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
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

export const selectedReddit = (state = 'programming/top/', action) => {
  switch (action.type) {
    case C.SELECT_REDDIT:
      return action.reddit;
    default:
      return state;
  }
};



export const postsByReddit = (state = { }, action) => {
  switch (action.type) {
    case C.INVALIDATE_REDDIT:
    case C.RECEIVE_POSTS_REDDIT:
    case C.REQUEST_POSTS_REDDIT:
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      };
    default:
      return state;
  }
};
