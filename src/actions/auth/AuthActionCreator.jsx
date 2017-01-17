import * as firebase from 'firebase';
import C from '../../constants';
import { auth } from '../../firebaseApp';
import { closeModal } from '../ui/UiActionCreator';


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

//
//
// showModal, handleOk, handleCancel
// showModal() {
// 	this.setState({
// 		visible: true,
// 	});
// },
// handleOk() {
// 	this.setState({
// 		ModalText: 'The modal dialog will be closed after two seconds',
// 		confirmLoading: true,
// 	});
// 	setTimeout(() => {
// 		this.setState({
// 			visible: false,
// 			confirmLoading: false,
// 		});
// 	}, 2000);
// },
// handleCancel() {
// 	console.log('Clicked cancel button');
// 	this.setState({
// 		visible: false,
// 	});
// },
//
// export const showModal = () => {
// 	dispatch({
// 		type: C.SHOW_MODAL
// 	})
// };
