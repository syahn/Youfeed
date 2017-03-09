import 'eventsource';
import querystring from 'querystring';
import C from '../../constants';
import { superfeedrConfig } from '../../config';

const requestPosts = () => ({
  type: C.REQUEST_POSTS_TECHMEME
});

const receivePosts = post => ({
  type: C.RECEIVE_POSTS_TECHMEME,
  post
});

const rejectPosts = () => ({
  type: C.REJECT_POSTS_TECHMEME
});

export const fetchPostsTechmeme = () => dispatch => {
  dispatch(requestPosts());
  const { login, token } = superfeedrConfig;

  let url = 'https://stream.superfeedr.com/?';
  const query = {
    'count': 20,
    'wait': 'stream',
    'hub.mode': 'retrieve',
    'authorization': btoa([login, token].join(':')),
    'hub.callback': 'https://youfeed.space/techmeme',
  };

  url = url + querystring.stringify(query);

  let source = new EventSource(url);

  source.addEventListener("notification", (e) => {
    let notification = JSON.parse(e.data);

    notification.items.sort((x, y) => {
      return x.published - y.published;
    });

    notification.items.forEach((item) => {
      if(!item.source)
        item.source = {
          title: notification.title,
          permalinkUrl: notification.permalinkUrl
        };
        dispatch(receivePosts(notification));
    });
  });

  source.onerror = e => {
    console.log(e);
    dispatch(rejectPosts());
  };
};
