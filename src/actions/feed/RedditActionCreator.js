import fetch from 'isomorphic-fetch';
import C from '../../constants';
import redditLogo from '../../static/images/reddit.svg';

export const requestPosts = reddit => ({
  type: C.REQUEST_POSTS_REDDIT,
  reddit
});

export const receivePosts = posts => ({
  type: C.RECEIVE_POSTS_REDDIT,
  posts: posts,
});

const fetchPosts = reddit => dispatch => {
  dispatch(requestPosts(reddit));
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => {
      const posts = json.data.children.map(child => {
        const post = child.data;
        return {
          provider: 'Reddit',
          title: post.title,
          author: post.author,
          logo: redditLogo,
          image: '',
          url: `https://reddit.com/${post.permalink}`,
          siteUrl: post.url,
          score: post.score || post.ups || '0',
          time: post.created,
          content: '',
          category: []
        };
      });
      return dispatch(receivePosts(posts));
    });
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

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  const reddit = 'programming/top/';
  if (shouldFetchPosts(getState(), reddit)) {
    return dispatch(fetchPosts(reddit));
  }
};
