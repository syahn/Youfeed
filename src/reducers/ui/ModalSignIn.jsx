import C from '../../constants';
import initialState from '../../database';
import { updateObject } from '../util';

export const ui = (state = initialState, action) => {
	switch (action.type) {
    case C.SHOW_MODAL:
      return updateObject(state, { signInModalVisible : true });
    case C.CLOSE_MODAL:
      return updateObject(state, { signInModalVisible : false });
    case C.CONFIRM_MODAL:
      return updateObject(state, {
        ModalText: 'Authenticating...',
        confirmLoading: true,
      });
    case C.SET_VISIBILITY_FILTER:
      return updateObject(state, { 'visibilityFilter': action.filter });
		default:
			return state;
	}
};
