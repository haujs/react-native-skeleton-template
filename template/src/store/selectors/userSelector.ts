import {UserState} from '@store/types';

export const getUserState = (state: {user: UserState}) => state.user;
export const getIsAuth = (state: {user: UserState}) => state.user.isAuth;
export const getUserInfo = (state: {user: UserState}) => state.user.user;
export const getUserIsLoading = (state: {user: UserState}) =>
  state.user.isLoading;
