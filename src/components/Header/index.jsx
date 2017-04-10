import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import AuthContainer from '../Authentication';

import { Menu, Layout } from 'antd';
const { Header } = Layout;

const HeaderContainer = styled(Header)`
  position: fixed;
  width: 100%;
  z-index: 2;
  border-bottom: 1px solid #e8e8e8;
  background: #fff;
  padding: 0 !important;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 86vw;
  margin: 14px auto;
`;

const Menu_ = styled(Menu)`
  float: right;
  border: none;
`;

const MenuItem = styled(Menu.Item)`
  line-height: 34px;
  border: none !important;
  padding: 0;
  margin-left: 24px;
`;

const Logo = styled.strong`
  display: block;
  font-size: 20px;
  line-height: 18px !important;
  font-weight: 600;
`;

const Description = styled.span`
  display: block;
  color: #999;
  font-size: 13px;
  line-height: 14px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
  width: 34px;
`;

const LogoBox = styled(Link)`
  display: flex;
  align-items: flex-start;
`;

const LogoText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 98px;
  margin-top: 2px;
`;

const HeaderComponent = () => {

  return(
    <HeaderContainer>
      <HeaderWrapper>
        <LogoBox to="/">
          <LogoImage
            src="https://dl.dropbox.com/s/8n210f0q1w5f5nf/logo_youfeed.svg?dl=0"
            alt="logo_youfeed"
          />
          <LogoText>
            <Logo>
              Youfeed
            </Logo>
            <Description>
              Feeds you need
            </Description>
          </LogoText>
        </LogoBox>
        <Menu_ mode="horizontal">
          <MenuItem key="2">
            <AuthContainer />
          </MenuItem>
        </Menu_>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default HeaderComponent;
