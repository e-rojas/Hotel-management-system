const initiaState = { logged: false, name: '', token: '' };
const loggedReducer = (state = initiaState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return { ...state, ...action.updates };
    default:
      return state;
  }
};
export default loggedReducer;
