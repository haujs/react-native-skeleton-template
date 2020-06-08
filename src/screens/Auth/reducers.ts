import {
  LOGIN_ACCOUNT_REQUEST,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_ERROR,
  LOGOUT_ACCOUNT_SUCCESS,
} from './types';

const initialState = {
  isAuth: false,
  userInfo: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_ACCOUNT_REQUEST: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case LOGIN_ACCOUNT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        userInfo: action.payload,
      };
    }
    case LOGIN_ACCOUNT_ERROR: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case LOGOUT_ACCOUNT_SUCCESS: {
      return {
        ...state,
        userInfo: null,
      };
    }
    default: {
      return state;
    }
  }
};
