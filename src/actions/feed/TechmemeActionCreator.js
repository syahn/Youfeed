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

    if(notification.items.length > 0) {
      notification.items = notification.items.map(post => ({
        title: post.title,
        author: '',
        logo: 'https://dl.dropbox.com/s/2byudsj3akgzkib/techmeme_size_328x328.jpg?dl=0',
        image: '',
        url: post.id,
        siteUrl: '',
        score: '',
        time: post.published,
        content: '',
        category: []
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
