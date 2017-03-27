/* eslint-disable */
import 'eventsource';
import querystring from 'querystring';
import C from '../../constants';
import { superfeedrConfig } from '../../config';
import ReactHtmlParser from 'react-html-parser';

const requestPosts = () => ({
  type: C.REQUEST_POSTS_RSS
});

const receivePosts = (post, url) => ({
  type: C.RECEIVE_POSTS_RSS,
  post,
  url
});

const rejectPosts = () => ({
  type: C.REJECT_POSTS_RSS
});

export const fetchPostsRss = subscriptionUrl => (dispatch, getState) => {
  dispatch(requestPosts());
  const { login, token } = superfeedrConfig;
  const auth = getState().auth;

  let url = 'https://stream.superfeedr.com/?';
  const query = {
    'count': 20,
    'hub.mode': 'retrieve',
    'authorization': btoa([login, token].join(':')),
    'hub.callback[feed][url]': subscriptionUrl,
  };

  url = url + querystring.stringify(query);

  let source = new EventSource(url);
  source.addEventListener("notification", (e) => {
    let notification = JSON.parse(e.data);

    if(notification.items.length > 0) {
      notification.items = notification.items.map(post => ({
        title: post.title,
        author: post.auther,
        logo: post.source.image,
        image: '',
        url: post.permalinkUrl,
        siteUrl: '',
        score: '',
        time: post.published,
        content: post.summary || post.content && ReactHtmlParser(post.content.split('</p>')[0]),
        category: post.categories || []
      })).sort((x, y) => {
        return y.time - x.time;
      });
      dispatch(receivePosts(notification, subscriptionUrl));
    }
  });

  source.onerror = e => {
    console.log(e);
    dispatch(rejectPosts());
  };
};
