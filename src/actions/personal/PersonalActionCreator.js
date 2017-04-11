/* eslint-disable */
import { database, auth } from '../../firebaseApp';
import C from '../../constants';

export const clickSubscription = name => dispatch => {
  dispatch(updateCategoryCount(name));
  dispatch(addCategoryCount(name));
};

export const clickPost = name => dispatch => {
  dispatch(updatePostCount(name));
  dispatch(addPostCount(name));
};

const updatePostCount = name => (dispatch, getState) => {
  const { personalization } = getState();

  let newRef = database.ref(`/personalization/${auth.currentUser.uid}/${name}/postClick`);
  newRef.set(personalization[name].postClick + 1)
  .catch((error) => {
    console.log(error);
  });
};

const updateCategoryCount = name => (dispatch, getState) => {
  const { personalization } = getState();

  let newRef = database.ref(`/personalization/${auth.currentUser.uid}/${name}/`);
  newRef.set(Object.assign(personalization[name], {
      categoryClick: personalization[name].categoryClick + 1,
      postClick: personalization[name].postClick || 0
    }))
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
  type: C.DOWNLOAD_COUNT,
  val
});

const downloadRequestAction = () => ({
  type: C.DOWNLOAD_REQUEST_CATEGORY,
});

const downloadRejectAction = () => ({
  type: C.DOWNLOAD_REJECT_CATEGORY,
});

export const setSubscription = name => ({
  type: C.SET_CATEGORY,
  subscription: name
});

const addCategoryCount = name => ({
  type: C.CLICK_CATEGORY,
  subscription: name
});

const addPostCount = name => ({
  type: C.CLICK_POST,
  post: name
});
