/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import querystring from 'querystring';
// import FeedSelect from '../../containers/FeedSelect';
import FeedSubscript from './FeedSubscript';
import { superfeedrConfig } from '../../config';
import { Card } from '../ui-components/General';
import { Link } from 'react-router';

const propTypes = {

};

const Col = styled(Card)`
  margin-top: 11px;
  width: 100%;
  height: 100%;
`;

class FeedControl extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.auth){
      const { login, token } = superfeedrConfig;
      const { auth } = this.props;
      let url = "https://stream.superfeedr.com/?";
      const query = {
        'hub.mode': 'list',
        'authorization': btoa([login, token].join(':')),
        'search[endpoint][url]': `https://youfeed.space/${nextProps.auth.uid}`
      };
      url = url + querystring.stringify(query);

      fetch(url).then(res => res.json())
      .then(json => this.lists = json);
    }
  }

  getHN = () => {
    fetch(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`)
      .then(response => response.json())
      .then(lists => lists.map(list => fetch(`https://hacker-news.firebaseio.com/v0/item/${list}.json?print=pretty`)
      .then(item => console.log(item.json()))));
  }

  render(){
    let id = 0;
    return (
      <Col>
        <h3>Add subscription</h3>
        <FeedSubscript auth={this.props.auth}/>

        <h3>Subcription List</h3>
        {
          this.props.auth.uid &&
          this.lists.map( item => (
            <p key={id++}>{item.subscription.feed.title}</p>
          ))
        }
        <img style={{ width: '24px'}} src="https://dl.dropbox.com/s/t8avm6wndwfxf04/hackerNews.svg?dl=0" alt="hackernews" />
        <button onClick={this.getHN} >
          Hacker News
        </button>
        <Link to="/" activeClassName="activeNav">
          <p>RSS</p>
        </Link>
        <Link to="/hacker-news" activeClassName="activeNav">
          <p>Hacker News</p>
        </Link>
      </Col>
    );
  }


}


FeedControl.propTypes = propTypes;

export default FeedControl;
