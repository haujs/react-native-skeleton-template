import {delay, put, takeLatest} from '@redux-saga/core/effects';
import {startupSuccess, START_UP} from '@store/actions-types/startup';

function* watchStartup() {
  try {
    yield delay(1000); //Fake waiting process
  } catch (error) {
  } finally {
    yield put(startupSuccess());
  }
}

const startupSaga = [takeLatest(START_UP, watchStartup)];
export default startupSaga;
