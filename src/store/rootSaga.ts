import { all } from 'redux-saga/effects';
import { auth } from '@screens/Auth/saga';
import { bottomSheet } from '@components/common/BottomSheet/saga';

export function* rootSaga() {
  yield all([...auth, ...bottomSheet]);
}
