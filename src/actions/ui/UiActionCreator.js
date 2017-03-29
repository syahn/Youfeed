import C from '../../constants';

export const showModal = () => {
	return (dispatch) => {
		dispatch({ type: C.SHOW_MODAL });
	};
};

export const closeModal = () => dispatch => {
	dispatch({ type: C.CLOSE_MODAL });
};
