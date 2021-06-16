import {StartupState} from '@store/types/startup';

export const getStartUpLoading = (state: {startup: StartupState}) =>
  state.startup.isLoading;
