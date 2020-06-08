import { takeLeading, put } from 'redux-saga/effects';
import { LOGIN_ACCOUNT_REQUEST, LOGOUT_ACCOUNT_REQUEST } from './types';
import {
  loginAccountSuccess,
  loginAccountError,
  logoutAccountSuccess,
} from './actions';
import AsyncStorage from '@react-native-community/async-storage';

function* handleLoginAccount(action: any) {
  try {
    yield put(loginAccountSuccess(action.payload));
  } catch (error) {
    loginAccountError();
  }
}

function* handleLogoutAccount() {
  try {
    yield AsyncStorage.removeItem('token');
    yield put(logoutAccountSuccess());
  } catch (error) {
    console.log(error);
  }
}

export const auth = [
  takeLeading(LOGIN_ACCOUNT_REQUEST, handleLoginAccount),
  takeLeading(LOGOUT_ACCOUNT_REQUEST, handleLogoutAccount),
];
