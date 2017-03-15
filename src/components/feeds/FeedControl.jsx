import React, { Component, PropTypes } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import FeedSubscript from './FeedSubscript';
import { connect } from 'react-redux';
import { Link_ } from '../ui-components/General';
import { Icon, Menu, Popover, Button } from 'antd';
const SubMenu = Menu.SubMenu;

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

const propTypes = {
  subscription: PropTypes.array.isRequired
};

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
    };
  }


  render(){
    const { auth, subscription } = this.props;
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
              Feeds By Time
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
                  <MenuItem key={uuid()}>
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
              this.state.listOfSubscription.map(item => (
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
}

const mapStateToProps = state => ({
  subscription: state.subscription
});

FeedControl.propTypes = propTypes;

export default connect(mapStateToProps)(FeedControl);
