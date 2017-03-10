import fetch from 'isomorphic-fetch';
import C from '../../constants';
import { dribbleConfig } from '../../config';

const requestPosts = () => ({
  type: C.REQUEST_POSTS_DRIBBLE,
});

const receivePosts = post => ({
  type: C.RECEIVE_POSTS_DRIBBLE,
  post,
});

const rejectPosts = () => ({
  type: C.REJECT_POSTS_DRIBBLE
});

export const fetchPostsDribble = () => dispatch => {
  dispatch(requestPosts());

  fetch(``)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        list: json
      });
    });

  return fetch(`https://api.dribbble.com/v1/shots?access_token=${dribbleConfig.accessToken}`)
    .then( response => response.json())
    .then( json => {
      dispatch(receivePosts(json));
    })
    .catch( error => {
      console.log(error);
      dispatch(rejectPosts());
    });
};
