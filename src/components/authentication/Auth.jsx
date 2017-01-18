import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showModal, closeModal } from '../../actions/ui/UiActionCreator';
import { openAuth, logoutUser } from '../../actions/auth/AuthActionCreator';
import C from '../../constants';

import { Modal, Button } from 'antd';


const Auth = ( { showModal, visible, confirmLoading, closeModal , openAuth } ) => {
  return (
    <div>
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
    </div>
  )
}

export default Auth;
