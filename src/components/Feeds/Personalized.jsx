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
    const { feedsByProvider, count, auth } = this.props;

    const totalFeeds = feedsByProvider.reduce((acc, item) => {
      const { feeds, provider, metric } = item;
      return auth.uid
        ? acc
            .concat(
              feeds
                .sort((a, b) => a[metric] - b[metric])
                .slice(0, count[provider])
            )
            .sort((a, b) => b.time - a.time)
        : acc.concat(feeds).sort((a, b) => b.time - a.time);
    }, []);

    this.state = { posts: totalFeeds };
  }

  componentWillReceiveProps(nextProps) {
    const { auth, feedsByProvider, count } = this.props;
    let shouldUpdated = false;
    for (let i = 0; i < feedsByProvider.length; i++) {
      const { feeds: currFeeds } = feedsByProvider[i],
        { feeds: nextFeeds } = nextProps.feedsByProvider[i];
      if (currFeeds.length === nextFeeds.length) {
        shouldUpdated = true;
        break;
      }
    }
    if (shouldUpdated) {
      const totalFeeds = feedsByProvider.reduce((acc, item) => {
        const { feeds, metric, provider } = item;
        return auth.uid
          ? acc
              .concat(
                feeds
                  .sort((a, b) => a[metric] - b[metric])
                  .slice(0, count[provider])
              )
              .sort((a, b) => b.time - a.time)
          : acc.concat(feeds).sort((a, b) => b.time - a.time);
      }, []);

      this.setState({ posts: totalFeeds });
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
    postsByMedium,
    postsByRSS,
    auth
  } = state;

  const totalCategoryCount = Object.keys(personalization).reduce(
    (a, c) => a + personalization[c].categoryClick,
    0
  );

  const count = [
    "medium",
    "techmeme",
    "behance",
    "dribble",
    "hacker-news",
    "rss"
  ].reduce((acc, provider) => {
    if (provider !== "rss") {
      const { postClick, categoryClick } = personalization[provider];
      return (acc[provider] = Math.floor(
        (postClick + categoryClick) / totalCategoryCount * 100
      )), acc;
    } else {
      for (let i in postsByRSS) {
        const provider = postsByRSS[i].title.replace(/\./g, "");
        const { postClick, categoryClick } = personalization[provider];
        acc[provider] = Math.floor(
          (postClick + categoryClick) / totalCategoryCount * 100
        );
      }
      return acc;
    }
  }, {});

  const feedsByProvider = [
    { feeds: postsByMedium, provider: "medium", metric: "time" },
    { feeds: postsByTechmeme, provider: "techmeme", metric: "time" },
    { feeds: postsByBehance, provider: "behance", metric: "score" },
    { feeds: postsByHackerNews, provider: "hacker-new", metric: "score" },
    { feeds: postsByDribble, provider: "dribble", metric: "score" }
  ];

  for (let i in postsByRSS) {
    const { title, items } = postsByRSS[i];
    feedsByProvider.push({
      feeds: items,
      provider: title,
      metric: "time"
    });
  }

  return {
    feedsByProvider: feedsByProvider,
    count: count,
    auth: auth
  };
};

export default connect(mapStateToProps)(Personalized);
