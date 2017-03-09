/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import querystring from 'querystring';
import RedditSelect from '../../containers/feeds/RedditSelect';
import FeedSubscript from './FeedSubscript';
import { superfeedrConfig } from '../../config';
import { Link } from 'react-router';
import { Icon, Menu, Popover, Button, Spin } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const propTypes = {

};

const Col = styled.div`
  margin: 11px 0;
  border: 1px solid;
  border-radius: 3px;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  background: #fff;
  height: 100%;
`;

const NewsFeed = styled(Link)`
  display: flex !important;
  align-items: center;
`;

const Logo = styled.img`
  width: 18px;
  height: 18px;
`;

const CenterSpin = styled(Spin)`
  text-align: center;
  padding-left: 52px;
`;

class FeedControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render(){
    const { auth } = this.props;
    const { listOfSubscription } = this.state;
    const addSubscription = <FeedSubscript auth={auth}/>;

    return (
      <Col>
        <Menu
        onClick={this.handleClick}
        style={{ background: '#e9ecef'}}
        defaultOpenKeys={['newsFeed', 'rssList', 'youfeedList']}
        mode="inline"
        >
          <SubMenu
            key="newsFeed"
            title={
              <NewsFeed to="/">
                <Icon type="inbox" />
                News Feed
              </NewsFeed>}
          >
            <Menu.Item key='feedByPersonalized'>
              <Icon type="user" />
              Personalized Feeds
            </Menu.Item>
            <Menu.Item key='feedByTime'>
              <Icon type="clock-circle-o" />
              Feeds By Time
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="rssList"
            title={
              <span>
                <Icon type="appstore-o" />
                <span>RSS Subscription List</span>
              </span>}
          >
            {
              auth.uid && this.lists
              ?
              this.lists.map(item => (
                <Menu.Item key={item.subscription.feed.title}>
                  <Icon type="book" />
                  {item.subscription.feed.title.split(' ')[0]}
                </Menu.Item>
              ))
              :
              <Menu.Item key="isWaiting">
                <CenterSpin size="small"/>
              </Menu.Item>
            }
            <Menu.Item key="subscription">
              <Popover content={addSubscription} trigger="click">
                <Button>+ Add subscription</Button>
              </Popover>
            </Menu.Item>

          </SubMenu>
          <SubMenu
            key="youfeedList"
            title={
              <span>
                <Icon type="appstore" />
                <span>Youfeed List</span>
              </span>}
          >
            {
              listOfSubscription.map(item => (
                <Menu.Item key={item.name}>
                  <NewsFeed to={`/${item.name}`}>
                    <Logo src={item.logo} alt={item.name} />
                    <span>&nbsp;{item.name.charAt(0).toUpperCase() + item.name.slice(1).replace('-', ' ')}</span>
                  </NewsFeed>
                </Menu.Item>
              ))
            }
          </SubMenu>
        </Menu>
      </Col>
    );
  }
}


FeedControl.propTypes = propTypes;

export default FeedControl;
