import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, closeModal } from '../../actions/ui/UiActionCreator';
import { openAuth, logoutUser } from '../../actions/auth/AuthActionCreator';
import Auth from './Auth';
import C from '../../constants';
import styled from 'styled-components';
import { Button } from 'antd';

const UserStatus = styled.div`
  display: flex;
  height: 35px;
`;

const UserPhoto = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-right: 14px;
`;

// Cotainer component determines which button state should show
class AuthContainer extends Component {
  getJSX = ({
    auth,
    logoutUser,
    openAuth,
    showModal,
    visible,
    confirmLoading
  }) => {
		switch (auth.status) {
			case C.AUTH_LOGGED_IN: return (
				<UserStatus>
					<UserPhoto src={auth.photo} alt={auth.username}/>
					{" "}
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
