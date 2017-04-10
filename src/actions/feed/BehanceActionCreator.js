import fetch from 'isomorphic-fetch';
import C from '../../constants';
import { behanceConfig } from '../../config';
import behance from '../../static/images/behance.svg';

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
    .then(response => response.json())
    .then(posts => {
      const newPosts = posts.projects.map(post => ({
        title: post.name,
        author: post.owners[0].display_name,
        logo: behance,
        image: post.covers.original,
        url: post.url,
        siteUrl: '',
        score: post.stats.appreciations,
        time: post.published_on,
        content: '',
        category: post.fields || []
      }));

      dispatch(receivePosts(newPosts));
    })
    .catch( error => {
      console.log(error);
      dispatch(rejectPosts());
    });
};
