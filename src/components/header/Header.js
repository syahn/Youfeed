import React, { Component, PropTypes } from 'react';
import Auth from '../authentication/Auth';
import ControlSignIn from '../../containers/authentication/ControlSignIn';

const propTypes = {

};
const defaultProps = {

};

class Header extends Component {

    render() {
        return(
          <header className="header">
            <span className="logo">Youfeed</span>
            <Auth />
          </header>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
