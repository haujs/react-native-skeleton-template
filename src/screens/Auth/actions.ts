import {
  LOGIN_ACCOUNT_REQUEST,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_ERROR,
  LOGOUT_ACCOUNT_REQUEST,
  LOGOUT_ACCOUNT_SUCCESS,
} from './types';

export function loginAccountRequest(payload: any) {
  return { type: LOGIN_ACCOUNT_REQUEST, payload: payload };
}
export function loginAccountSuccess(payload: any) {
  return { type: LOGIN_ACCOUNT_SUCCESS, payload: payload };
}
export function loginAccountError() {
  return { type: LOGIN_ACCOUNT_ERROR };
}

export function logoutAccountRequest() {
  return { type: LOGOUT_ACCOUNT_REQUEST };
}
export function logoutAccountSuccess() {
  return { type: LOGOUT_ACCOUNT_SUCCESS };
}
