import 'eventsource';
import querystring from 'querystring';
import C from '../../constants';
import { superfeedrConfig } from '../../config';

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
  let notification = {items: []};
  source.addEventListener("notification", (e) => {
    notification = JSON.parse(e.data);

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
