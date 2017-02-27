const initialState = {
    todos : [],
    ui : {
      signInModalVisible: false,
      signInModalconfirmLoading: false,
      signInModalText:'Content of the modal dialog',
      visibilityFilter : 'SHOW_ALL',
    },
    widgets: [
      {type: 'todo', id: 100},
    ]
};

export default initialState;
