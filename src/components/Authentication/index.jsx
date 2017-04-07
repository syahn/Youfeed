/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { showModal, closeModal } from '../../actions/ui/UiActionCreator';
import { openAuth, logoutUser } from '../../actions/auth/AuthActionCreator';
import Auth from './Auth';
import C from '../../constants';
import styled from 'styled-components';
import { Button, Dropdown, Menu, Icon, Tooltip } from 'antd';

const UserStatus = styled.div`
  display: flex;
  height: 35px;
`;

const UserPhoto = styled.img`
  width: 35px;
  border-radius: 50%;
`;

const Button_ = styled(Button)`
  margin: 0 12px 0 8px;
  padding-right: 6px;
`;

// Cotainer component determines which button state should show
class AuthContainer extends Component {
  getJSX = ({
    auth,
    logoutUser,
    openAuth,
    showModal,
    closeModal,
    visible,
    confirmLoading
  }) => {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item>
          <Tooltip title="Comming soon!">
            <span>Setting</span>
          </Tooltip>
        </Menu.Item>
      </Menu>
    );

  	switch (auth.status) {
  	  case C.AUTH_LOGGED_IN: return (
  			<UserStatus>
  				<UserPhoto
            src={auth.photo}
            alt={auth.username}
          />
  				&nbsp;
          <Dropdown overlay={menu}>
            <Button_>
              <Icon type="appstore" />
            </Button_>
          </Dropdown>
          <Button onClick={logoutUser}>
            Log out
          </Button>
  			</UserStatus>
  		);
  		case C.AUTH_AWAITING_RESPONSE: return (
  			<UserStatus>
  				<Button disabled>authenticating...</Button>
  			</UserStatus>
  		);
  		default: return (
        <Auth
          showModal={showModal}
          visible={visible}
          confirmLoading={confirmLoading}
          closeModal={closeModal}
          openAuth={openAuth}
        />
  		);
  	}
	}
	render() {
		return this.getJSX(this.props);
	}

}

const mapStateToProps = (state) => {
	return {
    auth: state.auth,
    visible: state.ui.signInModalVisible,
    confirmLoading: state.ui.signInModalconfirmLoading,
    modalText: state.ui.signInModalText,
  };
};

const mapDispatchToProps = {
  openAuth,
  closeModal,
  logoutUser,
  showModal
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
