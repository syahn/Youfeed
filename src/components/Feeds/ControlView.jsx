/* eslint-disable */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import { Link_ } from '../General';
import { Icon, Menu, Popover, Button } from 'antd';

const SubMenu = Menu.SubMenu;

const propTypes = {
  subscription: PropTypes.array
};
const defaultProps = {

};

const Col = styled.div`
  margin: 11px 0;
  border: 1px solid;
  border-radius: 3px;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  background: #fff;
  height: 100%;
`;

const Logo = styled.img`
  width: 27px;
  height: 27px;
`;

const MenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
`;


function ControlView({
  handleClick,
  subscription,
  addSubscription,
  listOfSubscription
}) {
  return(
    <Col>
    <Menu
      onClick={e => handleClick(e.key)}
      style={{ background: '#e9ecef'}}
      defaultOpenKeys={['newsFeed', 'rssList', 'youfeedList']}
      mode="inline"
    >
      <SubMenu
        key="newsFeed"
        title={
          <Link_ to="/">
            <Icon type="inbox" />
            News Feed
          </Link_>
        }
      >
        <MenuItem key='feedByPersonalized'>
          <Icon type="user" />
          Personalized Feeds
        </MenuItem>
        <MenuItem key='feedByTime'>
          <Icon type="clock-circle-o" />
          <Link_ to='feedsbytime'>
            <span>Feeds By Time</span>
          </Link_>
        </MenuItem>
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
          subscription.length > 0 &&
          subscription.map(item => {
            const domain = item.subscription.feed.title.split(' ')[0];
            return (
              <MenuItem key={domain}>
                <Icon type="book" />
                <Link_ to={`/${domain}`}>
                  <span>{domain}</span>
                </Link_>
              </MenuItem>
            );
          })
        }
        <MenuItem key="subscription">
          <Popover content={addSubscription} trigger="click">
            <Button>+ Add subscription</Button>
          </Popover>
        </MenuItem>

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
            <MenuItem key={item.name}>
              <Link_ to={`/${item.name}`}>
                <Logo src={item.logo} alt={item.name} />
                <span>
                  &nbsp;{item.name.charAt(0).toUpperCase()
                    + item.name.slice(1).replace('-', ' ')}
                  </span>
              </Link_>
            </MenuItem>
          ))
        }
      </SubMenu>
    </Menu>
    </Col>
  );
}

ControlView.propTypes = propTypes;
ControlView.defaultProps = defaultProps;

export default ControlView;
