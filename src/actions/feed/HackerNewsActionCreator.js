import fetch from 'isomorphic-fetch';
import hackerNews from '../../static/images/hackernews.svg';
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
      .then(post => {
        const newPost = {
          title: post.title,
          author: post.by,
          logo: hackerNews,
          image: '',
          url: `https://news.ycombinator.com/item?id=${post.id}`,
          siteUrl: post.url,
          score: post.score,
          time: post.time,
          content: '',
          category: []
        };
        return dispatch(receivePosts(newPost, 'hackernews'));
      })
      .catch((error) => {
        console.log(error);
        dispatch(rejectPosts());
      });
  }
};
