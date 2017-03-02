import { database, auth } from '../../firebaseApp';
import C from '../../constants';

export const getMemo = () => dispatch => {
  return database.ref(`/memo/${auth.currentUser.uid}/`)
  .once('value')
  .then(snap => {
    dispatch(downloadMemo(snap.val().text));
  })
  .catch((error) => {
    console.log(error);
    dispatch(getMemoRejectedAction());
  });
};

export const downloadMemo = memo => ({
  type: C.GET_MEMO,
  text: memo
});


export const editMemo = text => dispatch => {
  const newAction = {
    type: C.EDIT_MEMO,
    text
  };

  if(auth.currentUser){
    dispatch(updateMemo(newAction));
  } else {
    dispatch(newAction);
  }
};

const updateMemo = newAction => dispatch => {
  dispatch(newAction);

  return database.ref(`/memo/${auth.currentUser.uid}/text/`)
  .set(newAction.text)
  .catch((error) => {
    console.log(error);
    dispatch(updateMemoRejectedAction());
  });
};

export const updateMemoRejectedAction = () => ({
  type: C.UPDATE_REJECTED_MEMO
});

export const getMemoRejectedAction = () => ({
  type: C.GET_REJECTED_MEMO
});
