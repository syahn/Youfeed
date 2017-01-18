import * as firebase from 'firebase';
import C from '../../constants';
import { auth } from '../../firebaseApp';


export const showModal = () => {
	return (dispatch) => {
		dispatch({ type: C.SHOW_MODAL });
	}
};

export const closeModal= () => {
	return (dispatch) => {
		dispatch({ type: C.CLOSE_MODAL });
	}
};
