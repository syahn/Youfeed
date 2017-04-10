import C from '../../constants';
import { updateObject } from '../util';

export const ui = (state = {
	signInModalVisible: false,
	signInModalconfirmLoading: false,
	signInModalText:'Content of the modal dialog',
	visibilityFilter: 'SHOW_ALL',
	newSubscription: {
		succeed: false,
		loading: false
	},
	visibilityHamburger: false
}, action) => {
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
		case C.REQUEST_SUBSCRIPTION_ITEM:
			return updateObject(state, {
				'newSubscription': {
					succeed: false,
					loading: true
				}
			});
		case C.SUCCEED_SUBSCRIPTION_ITEM:
			return updateObject(state, {
				'newSubscription': {
					succeed: true,
					loading: false
				}
			});
		case C.REJECT_SUBSCRIPTION_ITEM:
			return updateObject(state, {
				'newSubscription': {
					succeed: false,
					loading: false
				}
			});
		case C.OPEN_HAMBURGER:
			return updateObject(state, { 'visibilityHamburger': !state.visibilityHamburger });
		case C.CLOSE_HAMBURGER:
			return updateObject(state, { 'visibilityHamburger': false });
		default:
			return state;
	}
};
