import fetch from "isomorphic-fetch";
import C from "../../constants";
import { dribbleConfig } from "../../config";
import dribble from "../../static/images/dribble.svg";

const requestPosts = () => ({
  type: C.REQUEST_POSTS_DRIBBLE
});

const receivePosts = post => ({
  type: C.RECEIVE_POSTS_DRIBBLE,
  post
});

const rejectPosts = () => ({
  type: C.REJECT_POSTS_DRIBBLE
});

export const fetchPostsDribble = () => dispatch => {
  dispatch(requestPosts());

  return fetch(
    `https://api.dribbble.com/v1/shots?access_token=${dribbleConfig.accessToken}`
  )
    .then(response => response.json())
    .then(posts => {
      const newPosts = posts
        .map(post => {
          let published = new Date(post.created_at);
          return {
            provider: "Dribble",
            title: post.title,
            author: post.user.name,
            logo: dribble,
            image: post.images.normal,
            url: post.html_url,
            siteUrl: "",
            score: post.likes_count,
            time: published.getTime() / 1000,
            content: "",
            category: post.tags || []
          };
        })
        .sort((x, y) => {
          return y.score - x.score;
        });
      dispatch(receivePosts(newPosts));
    })
    .catch(error => {
      console.log(error);
      dispatch(rejectPosts());
    });
};
