import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { auth } from '../../../firebaseApp';

class Widget extends Component {
  render() {
    var authUi = new firebaseui.auth.AuthUI(auth);
    var uiConfig = {
        // Url to redirect to after a successful sign-in.
        'signInSuccessUrl': '/',
        'callbacks': {
          'signInSuccess': function(user, credential, redirectUrl) {
            if (window.opener) {
              // The widget has been opened in a popup, so close the window
              // and return false to not redirect the opener.
              window.close();
              return false;
            } else {
              // The widget has been used in redirect mode, so we redirect to the signInSuccessUrl.
              return true;
            }
          }
        },
        'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        'tosUrl': 'https://www.google.com'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      // The start method will wait until the DOM is loaded to include the FirebaseUI sign-in widget
      // within the element corresponding to the selector specified.
      authUi.start('#firebaseui-auth-container', uiConfig);
    return(
      <div id="firebaseui-auth-container"></div>
    );
  }
}

export default Widget;
