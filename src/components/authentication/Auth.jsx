import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showModal, handleOk, handleCancel } from '../../actions/ui/UiActionCreator';
import C from '../../constants';

import { Modal, Button } from 'antd';

class Auth extends Component {
  render(){
    const { showModal, visible, confirmLoading, modalText,handleCancel } = this.props;
    return (
      <div>
        <Button type="primary" onClick={showModal}>Log In</Button>
        <Modal title="Title of the modal dialog"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText="Ok"
          cancelText="Cancel"
          closable={true}
          width={450}
        >
          <Button type="ghost" className="Button-auth Button-facebook">
            Facebook
          </Button>
          <Button type="ghost" className="Button-auth Button-google">
            Google
          </Button>
          <Button type="ghost" className="Button-auth Button-twitter">
            Twitter
          </Button>
          <Button type="ghost" className="Button-auth Button-github">
            Github
          </Button>
        </Modal>
      </div>
  )
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
  showModal,
  handleCancel
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
//
//
// getJSX = () => {
//   const { auth, openAuthWindow, logoutUser } = this.props;
//
//   switch (auth.status) {
//     case C.AUTH_LOGGED_IN: return (
//       <div>
//         <span>Logged in as {auth.username}.</span>
//         {" "}
//         <Button onClick={logoutUser}>Log out</Button>
//       </div>
//     );
//     case C.AUTH_AWAITING_RESPONSE: return (
//       <div>
//         <Button disabled>authenticating...</Button>
//       </div>
//     );
//     default: return (
//       <div>
//         <Button className="button button--sign-in"
//                 onClick={
//                   () => {
//                     openAuthWindow();
//                     window.open('/signin', '_blank', 'width=600,height=675');
//                   }
//                 }>
//           Sign In
//         </Button>
//       </div>
//     );
//   }
// }
