/* eslint-disable */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import FeedTemplate from "./FeedTemplate";

const propTypes = {
  medium: PropTypes.array,
  techMeme: PropTypes.array,
  hackerNews: PropTypes.array,
  behance: PropTypes.array,
  dribble: PropTypes.array,
  rss: PropTypes.array
};

class Personalized extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.feeds.sort((a, b) => b.time - a.time).slice(0, 30)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.feeds) {
      this.setState({
        posts: nextProps.feeds.sort((a, b) => b.time - a.time).slice(0, 30)
      });
    }
  }

  render() {
    const { posts } = this.state;
    return <FeedTemplate posts={posts} showProvider="true" />;
  }
}

FeedTemplate.propTypes = propTypes;

const mapStateToProps = state => {
  let {
    personalization,
    postsByHackerNews,
    postsByTechmeme,
    postsByBehance,
    postsByDribble,
    postsByReddit,
    postsByMedium,
    postsByRSS,
    auth
  } = state;

  let totalClickCount = Object.keys(personalization).reduce(
    (a, c) => a + personalization[c].postClick,
    0
  );

  if (auth.status === "AUTH_ANONYMOUS" || totalClickCount < 1) {
    postsByRSS = Object.keys(postsByRSS).reduce(
      (a, c) => a.concat(postsByRSS[c].items),
      []
    );
    const feeds = [
      ...postsByReddit,
      ...postsByHackerNews,
      ...postsByTechmeme,
      ...postsByBehance,
      ...postsByDribble,
      ...postsByMedium
    ];

    return { feeds: feeds };
  }

  const totalCategoryCount = Object.keys(personalization).reduce(
    (a, c) => a + personalization[c].categoryClick,
    0
  );

  let count = {
    medium: Math.floor(
      personalization["medium"].postClick / totalCategoryCount * 100
    ),
    techMeme: Math.floor(
      personalization["techmeme"].postClick / totalCategoryCount * 100
    ),
    behance: Math.floor(
      personalization["behance"].postClick / totalCategoryCount * 100
    ),
    dribble: Math.floor(
      personalization["dribble"].postClick / totalCategoryCount * 100
    ),
    hackerNews: Math.floor(
      personalization["hacker-news"].postClick / totalCategoryCount * 100
    ),
    reddit: Math.floor(
      personalization["reddit"].postClick / totalCategoryCount * 100
    )
  };

  for (let i in postsByRSS) {
    const title = postsByRSS[i].title;
    count[title] = Math.floor(
      personalization[title].postClick / totalCategoryCount * 100
    );
  }

  const feedsByProvider = [
    ["youfeed", postsByMedium, "medium", "time"],
    ["youfeed", postsByTechmeme, "techmeme", "time"],
    ["youfeed", postsByBehance, "behance", "score"],
    ["youfeed", postsByHackerNews, "hackerNews", "score"],
    ["youfeed", postsByDribble, "dribble", "score"],
    ["youfeed", postsByReddit, "reddit", "score"],
    ["rss", postsByRSS, "rss", "time"]
  ];

  const totalFeeds = feedsByProvider.reduce((acc, item) => {
    const [type, feeds, provider, metric] = item;
    if (type === "youfeed") {
      return acc.concat(
        feeds.sort((a, b) => a[metric] - b[metric]).slice(0, count[provider])
      );
    } else {
      return acc.concat(
        Object.keys(feeds)
          .reduce(
            (prev, rssProvider) =>
              prev.concat(
                feeds[rssProvider].items.slice(0, count[feeds[rssProvider]])
              ),
            []
          )
          .sort((a, b) => a[metric] - b[metric])
      );
    }
  }, []);

  return { feeds: totalFeeds };
};

export default connect(mapStateToProps)(Personalized);
