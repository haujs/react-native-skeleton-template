import {StartupState} from '@store/actions-types/startup';

export const getStartUpLoading = (state: {startup: StartupState}) =>
  state.startup.isLoading;
