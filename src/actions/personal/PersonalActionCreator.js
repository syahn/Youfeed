import { database, auth } from '../../firebaseApp';
import C from '../../constants';

export const clickSubscription = name => dispatch => {
  dispatch(updateCategory(name));
  dispatch(addCategoryCount(name));
};

export const clickPost = name => dispatch => {
  dispatch(updatePost(name));
  dispatch(addPostCount(name));
};


const updatePost = name => (dispatch, getState) => {
  const { personalization } = getState();

  let newRef = database.ref(`/personalization/${auth.currentUser.uid}/${name}/postClick`);
  newRef.set(personalization[name] + 1)
  .catch((error) => {
    console.log(error);
  });
};

const updateCategory = name => (dispatch, getState) => {
  const { personalization } = getState();

  let newRef = database.ref(`/personalization/${auth.currentUser.uid}/${name}/categoryClick`);
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
  type: C.DOWNLOAD_CATEGORY,
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
