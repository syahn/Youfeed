import { database, auth } from '../../firebaseApp';
import C from '../../constants';

export const clickSubscription = name => dispatch => {
  dispatch(updatePersonal(name));
  dispatch(addCount(name));
};

export const setSubscription = name => ({
  type: C.SET_PERSONALIZATION,
  subscription: name
});

export const addCount = name => ({
  type: C.CLICK_PERSONALIZATION,
  subscription: name
});

const updatePersonal = name => (dispatch, getState) => {
  const { personalization } = getState();

  let newRef = database.ref(`/personalization/${auth.currentUser.uid}/${name}`);
  newRef.set(personalization[name] + 1)
  .catch((error) => {
    console.log(error);
  });
};

export const getPersonal = () => dispatch => {
  dispatch(downloadRequestAction());
  return database.ref(`/personalization/${auth.currentUser.uid}/`)
  .once('value', snap => {
    dispatch(downloadPersonal(snap.val()));
  })
  .catch((error) => {
    console.log(error);
    dispatch(downloadRejectAction());
  });
};

const downloadPersonal = val => ({
  type: C.DOWNLOAD_PERSONALIZATION,
  val
});

const downloadRequestAction = () => ({
  type: C.DOWNLOAD_REQUEST_PERSONALIZATION,
});

const downloadRejectAction = () => ({
  type: C.DOWNLOAD_REJECT_PERSONALIZATION,
});
