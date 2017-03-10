import fetch from 'isomorphic-fetch';
import C from '../../constants';
import { behanceConfig } from '../../config';

const requestPosts = () => ({
  type: C.REQUEST_POSTS_BEHANCE,
});

const receivePosts = post => ({
  type: C.RECEIVE_POSTS_BEHANCE,
  post,
});

const rejectPosts = () => ({
  type: C.REJECT_POSTS_BEHANCE
});

export const fetchPostsBehance = () => dispatch => {
  dispatch(requestPosts());

  return fetch(`https://crossorigin.me/https://www.behance.net/v2/projects?api_key=${behanceConfig.key}`)
    .then( response => response.json())
    .then( json => {
      console.log(json);
      dispatch(receivePosts(json));
    })
    .catch( error => {
      console.log(error);
      dispatch(rejectPosts());
    });
};
