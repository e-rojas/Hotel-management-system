//isLogged action generator
export const loggedIn = (updates) => {
  return {
    type: 'LOGGED_IN',
    updates,
  };
};
