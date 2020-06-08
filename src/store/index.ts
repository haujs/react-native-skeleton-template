import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createFilter } from 'redux-persist-transform-filter';
import { PERSIST_KEY } from '@utils/constants';

import { rootSaga } from './rootSaga';
import rootReducers from './rootReducers';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: PERSIST_KEY,
  storage: AsyncStorage,
  whitelist: ['auth'],
  transforms: [createFilter('auth', ['isAuth', 'userInfo'])],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store as any);

export { store, persistor };
