import {delay, put, takeLatest} from '@redux-saga/core/effects';
import * as types from '@store/actions-types/startup';

function* watchStartup() {
  try {
    yield delay(1000); //Fake waiting process
  } catch (error) {
  } finally {
    yield put(types.startupSuccess());
  }
}

const startupSaga = [takeLatest(types.START_UP, watchStartup)];
export default startupSaga;
