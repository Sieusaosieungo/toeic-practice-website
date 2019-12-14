import { SIGN_IN, SIGN_OUT } from '../constants/ActionTypes';

const initialState = {
  accessToken: null,
};

const auth = (state = initialState, action) => {
  const { type, accessToken } = action;

  // console.log('authenticated: ', accessToken);

  switch (type) {
    case SIGN_IN:
      return { ...state, accessToken };
    case SIGN_OUT:
      state = {
        accessToken: '',
      };
      return state;
    default:
      return state;
  }
};

export default auth;
