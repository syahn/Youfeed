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
  let url = "https://stream.superfeedr.com/?";
  const query = {
    count: 20,
    "hub.mode": "retrieve",
    authorization: btoa([login, token].join(":")),
    "hub.callback[feed][url]": subscriptionUrl
  };

  url = url + querystring.stringify(query);

  let source = new EventSource(url);
  source.addEventListener("notification", e => {
    let notification = JSON.parse(e.data);

    if (notification.items.length > 0) {
      notification.items = notification.items
        .map(post => {
          return {
            provider: notification.title,
            title: post.title,
            author: post.auther,
            logo: rssLogo,
            image: "",
            url: post.permalinkUrl,
            siteUrl: "",
            score: "",
            time: post.published,
            content: 
              post.summary && ReactHtmlParser(post.summary.split("</p>")[0]) ||
              post.content && ReactHtmlParser(post.content.split("</p>")[0]),
            category: post.categories || []
          };
        })
        .sort((x, y) => {
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
