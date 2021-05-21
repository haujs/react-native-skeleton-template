import {combineReducers} from 'redux';
import startup from './startup';
import modal from './modal';

const reducers = combineReducers({startup, modal});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
