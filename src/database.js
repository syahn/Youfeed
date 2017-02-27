import uuid from 'uuid';

const initialState = {
    todos : [],
    ui : {
      signInModalVisible: false,
      signInModalconfirmLoading: false,
      signInModalText:'Content of the modal dialog',
      visibilityFilter : 'SHOW_ALL',
    },
    widgets: [
      {type: 'todo', id: uuid()},
      {type: 'photo', id: uuid()}
    ]
};

export default initialState;
