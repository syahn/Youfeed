export const loadState = uid => {
  try {
    const serializedState = localStorage.getItem(uid);
    if (serializedState === null) {
      return "";
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (uid, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(uid, serializedState);
  } catch (err) {
    return undefined; 
  }
};
