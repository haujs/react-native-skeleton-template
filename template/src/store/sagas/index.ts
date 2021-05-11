import {all} from 'redux-saga/effects';
import startup from './startup';

function* rootSaga() {
  yield all([...startup]);
}

export default rootSaga;
