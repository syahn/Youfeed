import * as firebase from 'firebase';
import C from '../../constants';
import { auth } from '../../firebaseApp';


export const showModal = () => {
	return (dispatch) => {
		dispatch({ type: C.SHOW_MODAL });
	}
};

export const handleOk = () => {
	return (dispatch) => {
		dispatch({ type: C.CONFIRM_MODAL });
	}
};

export const handleCancel = () => {
	return (dispatch) => {
		dispatch({ type: C.CLOSE_MODAL });
	}
};
