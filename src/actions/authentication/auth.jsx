import * as firebase from 'firebase';
import C from '../../constants';
import { auth } from '../../firebaseApp';

//import { listenToArticles } from './articles';

export const listenToAuth = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch({
					type: C.AUTH_LOGIN,
					uid: user.uid,
					username: user.providerData[0].displayName,
				});

				// reload articles on auth update.
				//const listenToArticlesDispatcher = listenToArticles();
				//listenToArticlesDispatcher(dispatch, getState);
			} else {
				if (getState().auth.status !== C.AUTH_ANONYMOUS) {
					dispatch({ type: C.AUTH_LOGOUT });
				}
			}
		});
	};
};

export const openAuth = () => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_OPEN });
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider)
			.catch((error) => {
				dispatch({
					type: C.FEEDBACK_DISPLAY_ERROR,
					error: `Login failed! ${error}`
				});
				dispatch({ type: C.AUTH_LOGOUT });
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_LOGOUT });
		auth.signOut();
	};
};


// /*
// This module contains action creators dealing with `appState.auth`
// */
//
// var C = require("../../constants");
// import * as firebase from 'firebase';
//
// firebase.initializeApp(C.firebaseConfig);
// 	fireRef = new Firebase(C.FIREBASE);
//
//
// 	// called at app start
// export const startListeningToAuth = () => {
// 		return function(dispatch,getState){
// 			fireRef.onAuth(function(authData){
// 				if (authData){
// 					dispatch({
// 						type: C.LOGIN_USER,
// 						uid: authData.uid,
// 						username: authData.github.displayName || authData.github.username
// 					});
// 				} else {
// 					if (getState().auth.currently !== C.ANONYMOUS){ // log out if not already logged out
// 						dispatch({type:C.LOGOUT});
// 					}
// 				}
// 			});
// 		}
// 	}
//
// export const attemptLogin = () => {
// 		return function(dispatch,getState){
// 			dispatch({type:C.ATTEMPTING_LOGIN});
// 			fireRef.authWithOAuthPopup("github", function(error, authData) {
// 				if (error) {
// 					dispatch({type:C.DISPLAY_ERROR,error:"Login failed! "+error});
// 					dispatch({type:C.LOGOUT});
// 				} else {
// 					// no need to do anything here, startListeningToAuth have already made sure that we update on changes
// 				}
// 			});
// 		}
// }
//
// export const logoutUser = () => {
// 		return function(dispatch,getState){
// 			dispatch({type:C.LOGOUT}); // don't really need to do this, but nice to get immediate feedback
// 			fireRef.unauth();
// 		}
// }
