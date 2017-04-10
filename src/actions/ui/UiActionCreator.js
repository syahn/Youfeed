import C from '../../constants';

export const showModal = () => dispatch => {
	dispatch({ type: C.SHOW_MODAL });
};

export const closeModal = () => dispatch => {
	dispatch({ type: C.CLOSE_MODAL });
};

export const openHamburger = () => ({
	type: C.OPEN_HAMBURGER
});

export const closeHamburger = () => ({
	type: C.CLOSE_HAMBURGER
});
