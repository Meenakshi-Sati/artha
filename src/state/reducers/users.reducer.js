import users from '../../data/users';

function usersReducer(state = users, action) {
  switch (action.type) {
    case 'users/add':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default usersReducer;
