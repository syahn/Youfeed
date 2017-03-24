import C from '../../constants';

export const clickSubscription = name => ({
  type: C.CLICK_SUBSCRIPTTION,
  subscription: name
});

export const setSubscription = name => ({
  type: C.SET_SUBSCRIPTTION,
  subscription: name
});
