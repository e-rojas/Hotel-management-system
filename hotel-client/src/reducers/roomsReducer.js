const initialState = [];
const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return [...state, ...action.updates];
    default:
      return state;
  }
};

export default roomReducer;
