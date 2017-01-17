import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openAuthWindow, logoutUser } from '../../actions/authentication/auth';
import C from '../../constants';

import { Button } from 'antd';

class Auth extends Component {

  getJSX = () => {
    const { auth, openAuthWindow, logoutUser } = this.props;

    switch (auth.status) {
      case C.AUTH_LOGGED_IN: return (
        <div>
          <span>Logged in as {auth.username}.</span>
          {" "}
          <Button onClick={logoutUser}>Log out</Button>
        </div>
      );
      case C.AUTH_AWAITING_RESPONSE: return (
        <div>
          <Button disabled>authenticating...</Button>
        </div>
      );
      default: return (
        <div>
          <Button className="button button--sign-in"
                  onClick={
                    () => {
                      openAuthWindow();
                      window.open('/signin', '_blank', 'width=600,height=675');
                    }
                  }>
            Sign In
          </Button>
        </div>
      );
    }
  }
  render(){
    return this.getJSX();
  }
}


const mapStateToProps = (state) => {
	return { auth: state.auth };
};

const mapDispatchToProps = {
	openAuthWindow,
	logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
