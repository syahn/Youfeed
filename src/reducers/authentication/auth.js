import C from '../../constants';

// Reusable utility functions
export const auth = (state = {
	username: null,
	uid: null,
	status: C.AUTH_ANONYMOUS,
}, action) => {
	switch (action.type) {
		case C.AUTH_WINDOW_OPEN:
			return {
				status: C.AUTH_AWAITING_RESPONSE,
				username: 'guest',
				uid: null
			};

		case C.AUTH_LOGIN:
			return {
				status: C.AUTH_LOGGED_IN,
				username: action.username,
				uid: action.uid,
				photo: action.photo
			};

		case C.AUTH_LOGOUT:
			return {
				status: C.AUTH_ANONYMOUS,
				username: 'guest',
				uid: null
			};
		default:
			return state;
	}
};
