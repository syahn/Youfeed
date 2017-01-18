import C from '../../constants';

// Reusable utility functions

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

const initialState = {
    ui : {
      signInModalVisible: false,
      signInModalconfirmLoading: false,
      signInModalText:'Content of the modal dialog',
    }
};

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

		default:
			return state;
	}
};
