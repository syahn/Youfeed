import React from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';

const UserStatus = styled.div`
  display: flex;
  height: 35px;
`;

const Auth = ({
  showModal,
  visible,
  confirmLoading,
  closeModal,
  openAuth
}) => {

  return (
    <UserStatus>
      <Button type="primary" onClick={showModal}>Log In</Button>
      <Modal title="Title of the modal dialog"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={closeModal}
        okText="Ok"
        cancelText="Cancel"
        closable={true}
        width={450}
      >
        {/* TODO: Refactoring */}

        <Button
          type="ghost"
          className="Button-auth Button-facebook"
          onClick={()=>openAuth("facebook")}
        >
          Facebook
        </Button>
        <Button
          type="ghost"
          className="Button-auth Button-google"
          onClick={()=>openAuth("google")}
        >
          Google
        </Button>
        <Button
          type="ghost"
          className="Button-auth Button-twitter"
          onClick={()=>openAuth("twitter")}
        >
          Twitter
        </Button>
        <Button
          type="ghost"
          className="Button-auth Button-github"
          onClick={()=>openAuth("github")}
        >
          Github
        </Button>
      </Modal>
    </UserStatus>
  );
};

export default Auth;
