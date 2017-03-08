import fetch from 'isomorphic-fetch';
import C from '../../constants';

const requestPosts = () => ({
  type: C.REQUEST_POSTS_HACKERNEWS,
});

const receivePosts = post => ({
  type: C.RECEIVE_POSTS_HACKERNEWS,
  post,
});

const rejectPosts = () => ({
  type: C.REJECT_POSTS_HACKERNEWS
});

export const fetchPostsHN = () => dispatch => {
  dispatch(requestPosts());
  return fetch(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`)
    .then(response => response.json())
    .then(list => dispatch(fetchPostItemHN(list)))
    .catch((error) => {
      console.log(error);
      dispatch(rejectPosts());
    });
};

const fetchPostItemHN = list => dispatch => {
  for (let i=0; i<10; i++){
    fetch(`https://hacker-news.firebaseio.com/v0/item/${list[i]}.json?print=pretty`)
      .then(response => response.json())
      .then(post => dispatch(receivePosts(post, 'hackernews')))
      .catch((error) => {
        console.log(error);
        dispatch(rejectPosts());
      });
  }
};
