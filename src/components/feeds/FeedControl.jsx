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
        <Link to="/">
          <p>RSS</p>
        </Link>

        <Link to="/hacker-news">
          <img style={{ width: '24px'}} src="https://dl.dropbox.com/s/t8avm6wndwfxf04/hackerNews.svg?dl=0" alt="hackernews" />
          <span>Hacker News</span>
          <br />
        </Link>

        <Link to="/medium">
          <img style={{ width: '40px'}} src="https://dl.dropbox.com/s/lh0qk2agauwzjez/medium-m-color-100px.png?dl=0" alt="medium" />
          <span>Medium</span>
          <br />
        </Link>

        <Link to="/behance">
          <img style={{ width: '28px'}} src="https://dl.dropbox.com/s/ztbtx0mx7q3un9u/behance.png?dl=0" alt="medium" />
          <span>Behance</span>
          <br />
        </Link>

        <Link to="/dribble">
          <img style={{ width: '28px'}} src="https://dl.dropbox.com/s/089c3x5fquh8oe9/dribbble%20.svg?dl=0" alt="medium" />
          <span>Dribble</span>
          <br />
        </Link>

        <Link to="/techmeme">
          <img style={{ width: '28px'}} src="https://dl.dropbox.com/s/2byudsj3akgzkib/techmeme_size_328x328.jpg?dl=0" alt="medium" />
          <span>Techmeme</span>
          <br />
        </Link>

      </Col>
    );
  }


}


FeedControl.propTypes = propTypes;

export default FeedControl;
