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

  return fetch(`https://api.dribbble.com/v1/shots?access_token=${dribbleConfig.accessToken}`)
    .then(response => response.json())
    .then(posts => {
      const newPosts = posts.map(post => {
        let published = new Date(post.created_at);
        return {
          title: post.title,
          author: post.user.name,
          logo: 'https://dl.dropbox.com/s/089c3x5fquh8oe9/dribbble%20.svg?dl=0',
          image: post.images.normal,
          url: post.html_url,
          siteUrl: '',
          score: post.likes_count,
          time: published.getTime() / 1000,
          content: '',
          category: post.tags || []
        };
      });
      dispatch(receivePosts(newPosts));
    })
    .catch( error => {
      console.log(error);
      dispatch(rejectPosts());
    });
};
