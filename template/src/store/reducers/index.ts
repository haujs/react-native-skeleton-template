import {combineReducers} from 'redux';
import startup from './startup';

const reducers = combineReducers({startup});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
