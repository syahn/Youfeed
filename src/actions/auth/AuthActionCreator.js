import * as firebase from 'firebase';
import C from '../../constants';
import { auth } from '../../firebaseApp';
import { closeModal } from '../ui/UiActionCreator';


export const listenToAuth = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged((user) => {
			console.log(JSON.stringify(user));
			if (user) {
				dispatch({
					type: C.AUTH_LOGIN,
					uid: user.uid,
					username: user.providerData[0].displayName,
				});
				dispatch(closeModal());
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


// export const openAuth = () => {
// 	return (dispatch) => {
// 		dispatch({ type: C.AUTH_OPEN });
// 		const provider = new firebase.auth.GoogleAuthProvider();
// 		auth.signInWithPopup(provider)
// 			.catch((error) => {
// 				dispatch({
// 					type: C.FEEDBACK_DISPLAY_ERROR,
// 					error: `Login failed! ${error}`
// 				});
// 				dispatch({ type: C.AUTH_LOGOUT });
// 			});
// 	};
// };

export const openAuth = (Provider) => {
	let provider = undefined;
	return (dispatch) => {
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
