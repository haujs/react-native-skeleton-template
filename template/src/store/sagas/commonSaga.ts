import {showAlert} from '@store/actions';
import axios from 'axios';
import {call, cancelled} from 'redux-saga/effects';

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
export function* callApi<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): Generator<any, any, any> {
  const source = axios.CancelToken.source();
  try {
    return yield call<(...args: any[]) => string>(fn, ...args, source.token);
  } catch (error) {
    throw new ApiError(error);
  } finally {
    if (yield cancelled()) {
      source.cancel();
    }
  }
}
