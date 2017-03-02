// import uuid  from 'uuid';
import { database, auth } from '../../firebaseApp';
import C from '../../constants';

export const moveWidget = (from, to) => ({
  type: C.MOVE_WIDGET,
  from: from,
  to: to
});

export const editLayoutWidget = widgets => dispatch => {
  dispatch(updateWidgetRequestedAction());
  return database.ref(`/widgets/${auth.currentUser.uid}/`)
    .set(widgets)
    .catch((error) => {
      console.log(error);
      dispatch(updateWidgetRejectedAction());
    });
};

export const getWidget = () => dispatch => {
  return database.ref(`/widgets/${auth.currentUser.uid}/`).once('value')
  .then(snap => {
    dispatch({
      type: C.SET_WIDGET,
      widgets: snap.val()
    });
  })
  .catch((error) => {
    console.log(error);
    dispatch(setWidgetRejectedAction());
  });
};

export const setWidgetRejectedAction = () => ({
  type: C.SET_REJECTED_WIDGET
});

export const updateWidgetRequestedAction = () => ({
  type: C.UPDATE_REQUESTED_WIDGET
});

export const updateWidgetRejectedAction = () => ({
  type: C.UPDATE_REJECTED_WIDGET
});
