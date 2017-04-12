import React from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import facebook from '../../static/images/facebook.svg';
import github from '../../static/images/github.svg';
import google from '../../static/images/google.svg';
import twitter from '../../static/images/twitter.svg';

const UserStatus = styled.div`
  display: flex;
  height: 35px;
`;

const LoginButton = styled(Button)`
  display: flex;
  margin: 12px 0;
  align-items: center;
  height: 65px;
  width: 100%;
  font-size: 24px;

  img {
    width: 36px;

    @media only screen and (max-width: 768px) {
      margin: 0;
    }
  }
  span {
    position: relative;
    left: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

function Auth({
  showModal,
  visible,
  confirmLoading,
  closeModal,
  openAuth
}) {

  const logoMap = {
    facebook: facebook,
    google: google,
    twitter: twitter,
    github: github
  };

  return (
    <UserStatus>
      <Button
        type="primary"
        onClick={showModal}
      >
        Log In
      </Button>
      <Modal
        title="Join & Login"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={closeModal}
        okText="Ok"
        width={450}
      >
        {['facebook', 'google', 'twitter', 'github'].map(item => (
          <LoginButton
            key={item}
            type="ghost"
            onClick={()=>openAuth(item)}
          >
            <Wrapper>
              <img src={logoMap[item]} alt='facebook' />
              <span>{item[0].toUpperCase() + item.slice(1)}</span>
            </Wrapper>
          </LoginButton>
        ))}
      </Modal>
    </UserStatus>
  );
}

export default Auth;
