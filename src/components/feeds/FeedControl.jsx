/* eslint-disable */
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import FeedSubscript from "./FeedSubscript";
import ControlView from "./ControlView";
import hackerNews from "../../static/images/hackernews.svg";
import medium from "../../static/images/medium.svg";
import behance from "../../static/images/behance.svg";
import dribble from "../../static/images/dribble.svg";
import reddit from "../../static/images/reddit.svg";
import {
  clickSubscription,
  setSubscription
} from "../../actions/personal/PersonalActionCreator";

const propTypes = {
  subscription: PropTypes.array.isRequired
};

class FeedControl extends Component {
  state = {
    listOfSubscription: [
      { name: "hacker-news", logo: hackerNews },
      { name: "medium", logo: medium },
      { name: "behance", logo: behance },
      { name: "dribble", logo: dribble },
      {
        name: "techmeme",
        logo: "https://dl.dropbox.com/s/2byudsj3akgzkib/techmeme_size_328x328.jpg?dl=0"
      }
    ]
  };

  componentWillReceiveProps(nextProps) {
    const { onSetSubscription, onClickSubscription,subscription, auth } = this.props;
    const exception = ["subscription"];

    if (subscription.length === 0 && nextProps.subscription.length > 0) {
      nextProps.subscription.map(item => {
        const name = item.subscription.feed.title.replace(/\./g, "");
        onSetSubscription(name);
        if (
          auth.status === "AUTH_LOGGED_IN" &&
          exception.indexOf(name) < 0
        ) {
          onClickSubscription(name);
        }
      });
    }
  }

  handleClick = val => {
    const { onClickSubscription, auth } = this.props;
    const exception = ["subscription"];
    if (auth.status === "AUTH_LOGGED_IN" && exception.indexOf(val.key) < 0) {
      onClickSubscription(val.key.replace(/\./g, ""));
    }
  };

  render() {
    const { auth, subscription, visibilityHamburger } = this.props;
    const { listOfSubscription } = this.state;
    const addSubscription = <FeedSubscript auth={auth} />;

    return (
      <ControlView
        handleClick={this.handleClick}
        subscription={subscription}
        addSubscription={addSubscription}
        visibilityHamburger={visibilityHamburger}
        listOfSubscription={listOfSubscription}
      />
    );
  }
}

FeedControl.propTypes = propTypes;

export default connect(
  state => ({
    auth: state.auth,
    subscription: state.subscription,
    visibilityHamburger: state.ui.visibilityHamburger
  }),
  {
    onSetSubscription: setSubscription,
    onClickSubscription: clickSubscription
  }
)(FeedControl);
