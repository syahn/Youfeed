const initialState = {
    visibilityFilter : 'SHOW_ALL',
    todos : [],
    ui : {
      signInModalVisible: false,
      signInModalconfirmLoading: false,
      signInModalText:'Content of the modal dialog',
    },
    widgets: [
      {type: 'weather', id:200 },
      {type: 'todo', id: 100}, 
      {type: 'todo', id: 101}
    ]
};

export default initialState;
