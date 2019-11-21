<<<<<<< HEAD
import { STORE_USER, DELETE_USER } from '../constants/ActionTypes';
=======
import { STORE_USER, DELETE_USER, SIGN_IN } from '../constants/ActionTypes';
>>>>>>> 14eef0a724087e2d0b8a84b3429c0f3bec406b00

const initialState = {};

const user = (state = initialState, action) => {
  const { type, user } = action;

  switch (type) {
<<<<<<< HEAD
=======
    case SIGN_IN:
      return action.data;
>>>>>>> 14eef0a724087e2d0b8a84b3429c0f3bec406b00
    case STORE_USER:
      state = { ...state, ...user };
      return state;
    case DELETE_USER:
      state = {};
      return state;
    default:
      return state;
  }
};

export default user;
