/* eslint-disable */
import "eventsource";
import querystring from "querystring";
import C from "../../constants";
import { superfeedrConfig } from "../../config";

export const fetchListsRss = auth => dispatch => {
  dispatch(requestLists());
  const { login, token } = superfeedrConfig;

  let url = "https://push.superfeedr.com/?";
  const query = {
    "hub.mode": "list",
    "authorization": btoa([login, token].join(":")),
    "search[endpoint][url]": auth.status === "AUTH_ANONYMOUS"
      ? `https://youfeed.space/anonymous`
      : `https://youfeed.space/${auth.uid}`
  };

  url = url + querystring.stringify(query);

  return (fetch(url).then(res => res.json()).then(json => {
    dispatch(receiveLists(json));
  }).catch = e => {
    console.log(e);
    dispatch(rejectLists());
  });
};

export const requestSubscription = (auth, urlAdded) => dispatch => {
  dispatch(requestItem());
  const { login, token } = superfeedrConfig;
  let url = "https://push.superfeedr.com/?";
  const query = {
    "hub.mode": "subscribe",
    "hub.topic": `${urlAdded}`,
    "authorization": btoa([login, token].join(":")),
    "hub.callback": `https://youfeed.space/${auth.uid}`
  };
  url = url + querystring.stringify(query);
  fetch(url, { method: "POST" }).then(res => {
    if (res.ok) {
      dispatch(succeedSubscription());
      window.location.reload();
    } else {
      dispatch(rejectItem());
    }
  });
};

const requestLists = () => ({
  type: C.REQUEST_SUBSCRIPTION_LIST
});

const receiveLists = lists => ({
  type: C.RECEIVE_SUBSCRIPTION_LIST,
  lists
});

const rejectLists = () => ({
  type: C.REJECT_SUBSCRIPTION_LIST
});

const requestItem = () => ({
  type: C.REQUEST_SUBSCRIPTION_ITEM
});

const succeedSubscription = () => ({
  type: C.SUCCEED_SUBSCRIPTION_ITEM
});

const rejectItem = () => ({
  type: C.REJECT_SUBSCRIPTION_ITEM
});
