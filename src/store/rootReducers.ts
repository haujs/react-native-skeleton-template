import { combineReducers } from 'redux';
import auth from '@screens/Auth/reducers';
import bottomSheet from '@components/common/BottomSheet/reducers';

const rootReducer = combineReducers({
  auth,
  bottomSheet,
});

export default rootReducer;
