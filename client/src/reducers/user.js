import { STORE_USER, DELETE_USER, SIGN_IN } from '../constants/ActionTypes';

const initialState = {};

const user = (state = initialState, action) => {
  const { type, user } = action;

  console.log('xxx cha me may: ', type);

  switch (type) {
    case SIGN_IN:
      return action.data;
    case STORE_USER:
      console.log('xxx cha bo may: ', user);
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
