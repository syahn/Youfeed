import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link_ } from '../General';
import { Icon, Menu, Popover, Button } from 'antd';
const SubMenu = Menu.SubMenu;

const propTypes = {
  subscription: PropTypes.array
};

const Col = styled.div`
  left: 100px;
  margin: 11px 0;
  border: 1px solid;
  max-width: 247px;
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

const SubMenu_ = styled(SubMenu)`
  background: #E9ECEF;
  min-width: 245px;
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
        onClick={e => handleClick(e)}
        defaultOpenKeys={['newsFeed', 'rssList', 'youfeedList']}
        mode="inline"
      >
        <SubMenu_
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
            <Link_ to='/'>
              <span>Personalized Feeds</span>
            </Link_>
          </MenuItem>
          <MenuItem key='feedByTime'>
            <Icon type="clock-circle-o" />
            <Link_ to='feedsbytime'>
              <span>Feeds By Time</span>
            </Link_>
          </MenuItem>
        </SubMenu_>
        <SubMenu_
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
              const domain = item.subscription.feed.title;
              return (
                <MenuItem key={domain}>
                  <Icon type="book" />
                  <Link_ to={`/rss/${domain}`}>
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

        </SubMenu_>
        <SubMenu_
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
        </SubMenu_>
      </Menu>
    </Col>
  );
}

ControlView.propTypes = propTypes;

export default ControlView;
