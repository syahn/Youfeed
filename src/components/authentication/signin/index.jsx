import React, { PropTypes, Component } from 'react';


export default class About extends Component {

  render() {

    return (
      <div >
        <h1>
          About
        </h1>
      </div>
    );
  }
}


// import firebaseui from 'firebaseui';
// import firebase from 'firebase';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { openAuth, logoutUser } from '../../actions/authentication/auth';
// import { auth } from '../../firebaseApp';
// import C from '../../constants';
//
//
// var authUi = new firebaseui.auth.AuthUI(auth);
// //
// // var uiConfig = {
// //         signInSuccessUrl: '<url-to-redirect-to-on-success>',
// //         signInOptions: [
// //           // Leave the lines as is for the providers you want to offer your users.
// //           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// //           firebase.auth.FacebookAuthProvider.PROVIDER_ID,
// //           firebase.auth.TwitterAuthProvider.PROVIDER_ID,
// //           firebase.auth.GithubAuthProvider.PROVIDER_ID,
// //           firebase.auth.EmailAuthProvider.PROVIDER_ID
// //         ],
// //         // Terms of service url.
// //         tosUrl: '<your-tos-url>'
// //       };
//
// export default class Auth extends Component {
//   //
//   //
//   // componentDidMount() {
//   //   var self = this;
//   //   var signInWithPopup = function() {
//   //     window.open('/widget', 'Sign In', 'width=985,height=735');
//   //   };
//   //   var uiConfig = {
//   //     'callbacks': {
//   //       'signInSuccess': function(user) {
//   //         if (self.props.onSignIn) {
//   //           self.props.onSignIn(user);
//   //         }
//   //         return false;
//   //       }
//   //     },
//   //     'signInOptions': [
//   //       {
//   //         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   //         scopes: ['https://www.googleapis.com/auth/plus.login']
//   //       },
//   //       {
//   //         provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   //         scopes :[
//   //           'public_profile',
//   //           'email',
//   //           'user_likes',
//   //           'user_friends'
//   //         ]
//   //       },
//   //       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   //       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//   //       firebase.auth.GithubAuthProvider.PROVIDER_ID,
//   //     ]
//   //   };
//   //   authUi.start('#firebaseui-auth', uiConfig);
//   // }
//
//   componentWillUnmount() {
//     authUi.reset();
//   }
//
//   render() {
//       return (
//         <div>
//           <button id="sign-in-with-popup">Sign In</button>
//         </div>
//       );
//   }
// }
//
//
//
// //
// // class Auth extends Component {
// //     componentDidMount: function() {
// //     var self = this;
// //     var uiConfig = {
// //       'callbacks': {
// //         'signInSuccess': function(user) {
// //           if (self.props.onSignIn) {
// //             self.props.onSignIn(user);
// //           }
// //           return false;
// //         }
// //       },
// //       'signInOptions': [
// //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// //         firebase.auth.FacebookAuthProvider.PROVIDER_ID
// //       ]
// //     };
// //     authUi.start('#firebaseui-auth', uiConfig);
// //   },
// //   componentWillUnmount: function() {
// //     authUi.reset();
// //   },
// //
// //
// // 	getJSX(props) {
// // 		switch (props.auth.status) {
// // 			case C.AUTH_LOGGED_IN: return (
// // 				<div>
// // 					<span>Logged in as {props.auth.username}.</span>
// // 					{" "}<button onClick={props.logoutUser}>Log out</button>
// // 				</div>
// // 			);
// // 			case C.AUTH_AWAITING_RESPONSE: return (
// // 				<div>
// // 					<button disabled>authenticating...</button>
// // 				</div>
// // 			);
// // 			default: return (
// // 				<div>
// //                     <div id="firebaseui-auth"></div>
// // 					<button onClick={props.openAuth}>Log in</button>
// // 				</div>
// // 			);
// // 		}
// // 	}
// // 	render() {
// // 		return this.getJSX(this.props);
// // 	}
// // }
// //
// // const mapStateToProps = (state) => {
// // 	return { auth: state.auth };
// // };
// //
// // const mapDispatchToProps = {
// // 	openAuth,
// // 	logoutUser,
// // };
// //
// // export default connect(mapStateToProps, mapDispatchToProps)(Auth);
// //
//
//
//
//
// // // import React, { Component, PropTypes } from 'react';
// // //
// // // const propTypes = {
// // //
// // // };
// // // const defaultProps = {
// // //
// // // };
// // //
// // // class Auth extends Component {
// // //
// // //   constructor(props) {
// // //     super(props);
// // //   }
// // //
// // //   render() {
// // //     return(
// // //       <div className="AUTH_STATE">
// // //           <span>인증되지 않음</span>
// // //           <button class="Login">구글 인증</button>
// // //       </div>
// // //
// // //     );
// // //   }
// // // }
// // //
// // // Auth.propTypes = propTypes;
// // // Auth.defaultProps = defaultProps;
//
// // //
// // //  Auth;
// //
// //
// // var React = require("react"),
// // 	ReactRedux = require("react-redux"),
// // 	actions = require("../../actions/authentication/auth"),
// // 	C = require("../../constants"),
// // 	Link = require("react-router").Link;
// //
// // var Authpanel = React.createClass({
// // 	render: function(){
// // 		var p = this.props, auth = p.auth;
// // 		switch(auth.currently){
// // 			case C.LOGGED_IN: return (
// // 				<div className="authpanel">
// // 					<span>Logged in as {auth.username}.</span>
// // 					{' '}<button onClick={p.logoutUser}>Log out</button>
// // 				</div>
// // 			);
// // 			case C.AWAITING_AUTH_RESPONSE: return (
// // 				<div className="authpanel">
// // 					<button disabled><i className="fa fa-spinner fa-spin"></i> authenticating...</button>
// // 				</div>
// // 			);
// // 			default: return (
// // 				<div className="authpanel">
// // 					<button onClick={p.attemptLogin}>Log in</button>
// // 				</div>
// // 			);
// // 		}
// // 	}
// // });
// //
// // // now we connect the component to the Redux store:
// //
// // var mapStateToProps = function(appState){
// // 	// This component will have access to `appState.auth` through `this.props.auth`
// // 	return {auth:appState.auth};
// // };
// //
// // var mapDispatchToProps = function(dispatch){
// // 	return {
// // 		attemptLogin: function(){ dispatch(actions.attemptLogin()); },
// // 		logoutUser: function(){ dispatch(actions.logoutUser()); }
// // 	}
// // };
// //
// // module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Authpanel);
