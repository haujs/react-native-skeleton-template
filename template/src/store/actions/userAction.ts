import {LoginRequestPayload} from '@store/types';

/*Login Account*/
export const LOGIN_ACCOUNT_REQUEST = '@Login/request';
export const loginAccountRequest = (payload: LoginRequestPayload) => ({
  type: LOGIN_ACCOUNT_REQUEST,
  payload,
});

export const LOGIN_ACCOUNT_SUCCESS = '@Login/success';
export const loginAccountSuccess = (payload: any) => ({
  type: LOGIN_ACCOUNT_SUCCESS,
  payload,
});

export const LOGIN_ACCOUNT_ERROR = '@Login/error';
export const loginAccountError = () => ({type: LOGIN_ACCOUNT_ERROR});
/*Login Account End*/

/*Logout Account*/
export const LOGOUT_ACCOUNT = '@Logout';
export const logoutAccount = () => ({type: LOGOUT_ACCOUNT});

export const LOGOUT_ACCOUNT_SUCCESS = '@LogoutSuccess';
export const logoutAccountSuccess = () => ({type: LOGOUT_ACCOUNT_SUCCESS});
/*Logout Account End*/
