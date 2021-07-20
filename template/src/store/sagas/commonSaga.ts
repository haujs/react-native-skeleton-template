import i18n from '@i18n';
import {navigateAndReset} from '@navigation/NavigationServices';
import AsyncStorage from '@react-native-community/async-storage';
import {logoutAccountSuccess, showAlert} from '@store/actions';
import {ERROR, SESSION_TOKEN} from '@utils/constants';
import axios from 'axios';
import {call, cancelled, put} from 'redux-saga/effects';

export class ApiError {
  message: string;
  code: number;
  constructor(error: any) {
    this.message = error.message;
    this.code = error.code;
  }
}

export const alert = (
  message?: string,
  title?: string,
  type: 'error' | 'success' = 'error',
) =>
  showAlert({
    id: type,
    title: title,
    message: message,
    options: {cancelable: true},
  });

/**
 * CallApi Wrapper
 * Example:
 * ```
 * const result: LoginCustomerResponse = yield callApi(
      api.post,
      '/functions/loginCustomer',
      {...action.payload, uuidv4},
    );
 * ```
 */
export function* callApi<T1 extends Array<any>>(
  fn: (...args: any[]) => any,
  ...args: T1
): Generator<any, any, any> {
  const source = axios.CancelToken.source();
  try {
    return yield call(fn, ...args, source.token);
  } catch (error) {
    if (error.code === ERROR.INVALID_SESSION_TOKEN) {
      /* Invalid session token! */
      yield call(AsyncStorage.removeItem, SESSION_TOKEN);
      yield put(logoutAccountSuccess());
      navigateAndReset([{name: 'MainStack'}], 0);
      yield put(alert(i18n.t('Common:invalidSessionToken')));
    } else {
      throw new ApiError(error);
    }
  } finally {
    if (yield cancelled()) {
      source.cancel();
    }
  }
}
