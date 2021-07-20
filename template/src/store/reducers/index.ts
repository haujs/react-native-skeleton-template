import {combineReducers} from 'redux';
import common from './commonReducer';
import startup from './startupReducer';
import user from './userReducer';

const reducers = combineReducers({common, startup, user});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
