import 'eventsource';
import querystring from 'querystring';
import C from '../../constants';
import { superfeedrConfig } from '../../config';
import ReactHtmlParser from 'react-html-parser';
import medium from '../../static/images/medium.svg';

const requestPosts = () => ({
  type: C.REQUEST_POSTS_MEDIUM
});

const receivePosts = post => ({
  type: C.RECEIVE_POSTS_MEDIUM,
  post,
});

const rejectPosts = () => ({
  type: C.REJECT_POSTS_MEDIUM
});

export const fetchPostsMedium = () => dispatch => {
  dispatch(requestPosts());
  const { login, token } = superfeedrConfig;

  let url = 'https://stream.superfeedr.com/?';
  const query = {
    'count': 20,
    'wait': 'stream',
    'hub.mode': 'retrieve',
    'authorization': btoa([login, token].join(':')),
    'hub.callback': 'https://youfeed.space/medium',
  };

  url = url + querystring.stringify(query);

  let source = new EventSource(url);
  source.addEventListener("notification", (e) => {
    let notification = JSON.parse(e.data);

    if(notification.items.length > 0) {
      notification.items = notification.items.map(post => ({
        provider: 'Medium',
        title: post.title,
        author: post.actor.displayName,
        logo: medium,
        image: '',
        url: post.permalinkUrl,
        siteUrl: '',
        score: '',
        time: post.published,
        content: post.content && ReactHtmlParser(post.content.split('</p>')[0]),
        category: post.category || []
      })).sort((x, y) => {
        return y.time - x.time;
      });
      dispatch(receivePosts(notification));
    }
  });

  source.onerror = e => {
    console.log(e);
    dispatch(rejectPosts());
  };
};
