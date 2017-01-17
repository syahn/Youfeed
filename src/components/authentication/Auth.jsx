import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showModal, closeModal } from '../../actions/ui/UiActionCreator';
import { openAuth, logoutUser } from '../../actions/auth/AuthActionCreator';
import C from '../../constants';

import { Modal, Button } from 'antd';

class Auth extends Component {
  getJSX(props) {
    const { auth, logoutUser, openAuth } = this.props;
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
				<div>
					<Button onClick={openAuth}>Log in</Button>
				</div>
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
  logoutUser
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
//
// render(){
//   const { showModal, visible, confirmLoading, modalText, closeModal , openAuth } = this.props;
//
//   return (
//
//     <div>
//       <Button type="primary" onClick={showModal}>Log In</Button>
//       <Modal title="Title of the modal dialog"
//         visible={visible}
//         confirmLoading={confirmLoading}
//         onCancel={closeModal}
//         okText="Ok"
//         cancelText="Cancel"
//         closable={true}
//         width={450}
//       >
//         <Button
//           type="ghost"
//           className="Button-auth Button-facebook"
//           onClick={openAuth}
//         >
//           Facebook
//         </Button>
//         <Button
//           type="ghost"
//           className="Button-auth Button-google"
//           onClick={openAuth}
//         >
//           Google
//         </Button>
//         <Button type="ghost" className="Button-auth Button-twitter">
//           Twitter
//         </Button>
//         <Button type="ghost" className="Button-auth Button-github">
//           Github
//         </Button>
//       </Modal>
//     </div>
// )
// }
