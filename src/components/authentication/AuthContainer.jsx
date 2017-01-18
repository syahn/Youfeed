import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showModal, closeModal } from '../../actions/ui/UiActionCreator';
import { openAuth, logoutUser } from '../../actions/auth/AuthActionCreator';
import Auth from './Auth';
import C from '../../constants';

import { Button } from 'antd';

// Cotainer component determines which button state should show
class AuthContainer extends Component {
  getJSX(props) {
    const { auth, logoutUser, openAuth, showModal, visible, confirmLoading } = this.props;
		switch ( auth.status) {
			case C.AUTH_LOGGED_IN: return (
				<div>
					<span>Logged in as {auth.username}.</span>
					{" "}<Button onClick={logoutUser}>Log out</Button>
				</div>
			);
			case C.AUTH_AWAITING_RESPONSE: return (
				<div>
					<Button disabled>authenticating...</Button>
				</div>
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

};


const mapStateToProps = (state) => {
	return {
    auth: state.auth,
    visible: state.ui.signInModalVisible,
    confirmLoading: state.ui.signInModalconfirmLoading,
    modalText: state.ui.signInModalText,
  }
};

const mapDispatchToProps = {
  openAuth,
  closeModal,
  logoutUser,
  showModal
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
