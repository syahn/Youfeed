// These functions are referenced from Redux documentation

// Reusable utility functions
export function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
    const updatedItems = array.map(item => {
        if(item.id !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });
    return updatedItems;
}

export function deleteItemInArray(array, itemId) {
    const updatedArrays = array.filter(item => {
          return item.id !== itemId;
        }
    );
    return updatedArrays;
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export function swapIndices(array,index1,index2) {
  const newArray = array.slice();
  newArray[index1] = array[index2];
  newArray[index2] = array[index1];
  return newArray;
}
