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
        <Link to="/" activeClassName="activeNav">
          <p>RSS</p>
        </Link>

        <Link to="/hacker-news" activeClassName="activeNav">
          <img style={{ width: '24px'}} src="https://dl.dropbox.com/s/t8avm6wndwfxf04/hackerNews.svg?dl=0" alt="hackernews" />
          <span>Hacker News</span>
        </Link>
      </Col>
    );
  }


}


FeedControl.propTypes = propTypes;

export default FeedControl;
