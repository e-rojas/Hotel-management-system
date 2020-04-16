const initialState = {
  data: [],
};
const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        data: [...state, ...action.updates],
      };
    default:
      return state;
  }
};

export default roomReducer;
