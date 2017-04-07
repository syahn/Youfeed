import * as firebase from 'firebase';
import C from '../../constants';
import { auth } from '../../firebaseApp';
import { closeModal } from '../ui/UiActionCreator';

export const listenToAuth = () => (dispatch, getState) => {
	auth.onAuthStateChanged((user) => {
		if (user) {
			dispatch({
				type: C.AUTH_LOGIN,
				uid: user.uid,
				username: user.displayName,
				photo: user.photoURL
			});
			dispatch(closeModal());
		} else {
			if (getState().auth.status !== C.AUTH_ANONYMOUS) {
				dispatch({ type: C.AUTH_LOGOUT });
			}
		}
	});
};

export const openAuth = Provider => dispatch => {
	let provider = undefined;
	dispatch({ type: C.AUTH_OPEN });

	switch(Provider){
		case "facebook":
			provider = new firebase.auth.FacebookAuthProvider();
			provider.addScope('user_likes');
			break;
		case "google":
			provider = new firebase.auth.GoogleAuthProvider();
			break;
		case "twitter":
			provider = new firebase.auth.TwitterAuthProvider();
			break;
		case "github":
			provider = new firebase.auth.GithubAuthProvider();
			break;
	}

	auth.signInWithPopup(provider)
		.catch( error => {
			dispatch({
				type: C.FEEDBACK_DISPLAY_ERROR,
				error: `Login failed! ${error}`
			});
			dispatch({ type: C.AUTH_LOGOUT });
		});
};

export const logoutUser = () => dispatch => {
	dispatch({ type: C.AUTH_LOGOUT });
	auth.signOut();
};
