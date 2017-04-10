import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedSubscript from './FeedSubscript';
import ControlView from './ControlView';
import hackerNews from '../../static/images/hackernews.svg';
import medium from '../../static/images/medium.svg';
import behance from '../../static/images/behance.svg';
import dribble from '../../static/images/dribble.svg';
import reddit from '../../static/images/reddit.svg';
import {
  clickSubscription,
  setSubscription
} from '../../actions/personal/PersonalActionCreator';

const propTypes = {
  subscription: PropTypes.array.isRequired
};

class FeedControl extends Component {
  state = {
    listOfSubscription: [
      { name: 'hacker-news', logo: hackerNews },
      { name: 'medium', logo: medium },
      { name: 'behance', logo: behance },
      { name: 'dribble', logo: dribble },
      { name: 'techmeme', logo: 'https://dl.dropbox.com/s/2byudsj3akgzkib/techmeme_size_328x328.jpg?dl=0' },
      { name: 'reddit', logo: reddit }
    ]
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch, subscription } = this.props;

    if(subscription.length === 0 && nextProps.subscription.length > 0) {
      nextProps.subscription.map(item => {
        const name = item.subscription.feed.title;
        dispatch(setSubscription(name));
      });
    }
  }

  handleClick = val => {
    const { dispatch } = this.props;
    const exception = ['feedByPersonalized', 'subscription', 'feedByTime'];
    if(exception.indexOf(val.key) < 0) {
      dispatch(clickSubscription(val.key));
    }
  }

  render(){
    const { auth, subscription } = this.props;
    const { listOfSubscription } = this.state;
    const addSubscription = <FeedSubscript auth={auth}/>;

    return (
      <ControlView
        handleClick={this.handleClick}
        subscription={subscription}
        addSubscription={addSubscription}
        listOfSubscription={listOfSubscription}
      />
    );
  }
}

FeedControl.propTypes = propTypes;

export default connect(state => ({
  subscription: state.subscription
}))(FeedControl);
