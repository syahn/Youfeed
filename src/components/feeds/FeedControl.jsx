/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FeedSubscript from './FeedSubscript';
import ControlView from './ControlView';
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
      {
        name: 'hacker-news',
        logo: 'https://dl.dropbox.com/s/t8avm6wndwfxf04/hackerNews.svg?dl=0'
      },
      {
        name: 'medium',
        logo: 'https://dl.dropbox.com/s/lh0qk2agauwzjez/medium-m-color-100px.png?dl=0'
      },
      {
        name: 'behance',
        logo: 'https://dl.dropbox.com/s/ztbtx0mx7q3un9u/behance.png?dl=0'
      },
      {
        name: 'dribble',
        logo: 'https://dl.dropbox.com/s/089c3x5fquh8oe9/dribbble%20.svg?dl=0'
      },
      {
        name: 'techmeme',
        logo: 'https://dl.dropbox.com/s/2byudsj3akgzkib/techmeme_size_328x328.jpg?dl=0'
      },
      {
        name: 'reddit',
        logo: 'https://dl.dropbox.com/s/c7cacxajdx5s3sm/reddit.svg?dl=0'
      }]
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch, subscription } = this.props;

    if(subscription.length === 0 && nextProps.subscription.length > 0) {
      nextProps.subscription.map(item => {
        const name = item.subscription.feed.title.split(' ')[0];
        dispatch(setSubscription(name));
      });
    }
  }

  handleClick = val => {
    const { dispatch } = this.props;
    if(val.keyPath[1] !== 'newsFeed') {
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
