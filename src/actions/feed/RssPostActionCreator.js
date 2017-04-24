/* eslint-disable */
import "eventsource";
import querystring from "querystring";
import C from "../../constants";
import { superfeedrConfig } from "../../config";
import ReactHtmlParser from "react-html-parser";
import rssLogo from "../../static/images/rss.svg";

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

export const fetchPostsRss = subscriptionUrl => dispatch => {
  dispatch(requestPosts());
  const { login, token } = superfeedrConfig;
  let url = "https://push.superfeedr.com/?";
  const query = {
    count: 20,
    format: "json",
    "hub.mode": "retrieve",
    authorization: btoa([login, token].join(":")),
    "hub.callback[feed][url]": subscriptionUrl
  };

  url = url + querystring.stringify(query);
  return (fetch(url)
    .then(res => res.json())
    .then(json => {
      json.items = json.items
        .map(post => {
          return {
            provider: json.title,
            title: post.title,
            author: post.auther,
            logo: rssLogo,
            image: "",
            url: post.permalinkUrl,
            siteUrl: "",
            score: "",
            time: post.published,
            content: (post.summary &&
              ReactHtmlParser(post.summary.split("</p>")[0])) ||
              (post.content && ReactHtmlParser(post.content.split("</p>")[0])),
            category: post.categories || []
          };
        })
        .sort((x, y) => {
          return y.time - x.time;
        });
      dispatch(receivePosts(json, subscriptionUrl));
    }).catch = e => {
    console.log(e);
    dispatch(rejectPosts());
  });
};
