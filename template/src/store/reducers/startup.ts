import {START_UP_SUCCESS} from '@store/actions-types/startup';
import produce from 'immer';

const INITIAL_STATE = {
  isLoading: true,
};

const startupReducer = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_UP_SUCCESS:
      state.isLoading = false;
      return state;

    default:
      return state;
  }
});

export default startupReducer;
