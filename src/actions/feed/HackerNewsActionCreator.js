import fetch from 'isomorphic-fetch';
import C from '../../constants';

export const requestPosts = subscription => ({
  type: C.REQUEST_POSTS_HACKERNEWS,
  subscription
});

export const receivePosts = (post, subscription) => ({
  type: C.RECEIVE_POSTS_HACKERNEWS,
  subscription,
  post,
});

export const rejectPosts = () => ({
  type: C.REJECT_POSTS_HACKERNEWS
});

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts());
  return fetch(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`)
    .then(response => response.json())
    .then(list => dispatch(fetchPostItem(list)))
    .catch((error) => {
      console.log(error);
      dispatch(rejectPosts());
    });
};

const fetchPostItem = list => dispatch => {
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
