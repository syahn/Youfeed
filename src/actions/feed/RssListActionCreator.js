/* eslint-disable */
import 'eventsource';
import querystring from 'querystring';
import C from '../../constants';
import { superfeedrConfig } from '../../config';

const requestLists = () => ({
  type: C.REQUEST_SUBSCRIPTION_LIST
});

const receiveLists = lists => ({
  type: C.RECEIVE_SUBSCRIPTION_LIST,
  lists,
});

const rejectLists = () => ({
  type: C.REJECT_SUBSCRIPTION_LIST
});

export const fetchListsRss = auth => dispatch => {
  dispatch(requestLists());
  const { login, token } = superfeedrConfig;

  // It should be push.superfeedr.com, but it can escape SOP
  let url = "https://stream.superfeedr.com/?";
  const query = {
    'hub.mode': 'list',
    'authorization': btoa([login, token].join(':')),
    'search[endpoint][url]': `https://youfeed.space/${auth.uid}`,
  };

  url = url + querystring.stringify(query);

  return fetch(url).then(res => res.json())
  .then(json => dispatch(receiveLists(json)))
  .catch = e => {
    console.log(e);
    dispatch(rejectLists());
  };
};
