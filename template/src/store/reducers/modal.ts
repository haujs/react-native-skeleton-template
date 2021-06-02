import * as types from '@store/actions-types/modal';
import produce from 'immer';

const INITIAL_STATE = {
  modals: [],
};

const startupReducer = produce((state = INITIAL_STATE, action) => {
  const selectedIndex = state.modals.findIndex(
    (modal: types.ModalType) => modal.id === action.payload?.id,
  );
  switch (action.type) {
    case types.SHOW_MODAL:
      if (selectedIndex !== -1) {
        state.modals[selectedIndex].isVisible = true;
      } else {
        state.modals.push({id: action.payload.id, isVisible: true});
      }
      return state;

    case types.CLOSE_MODAL:
      if (action.payload) {
        if (selectedIndex !== -1) {
          state.modals[selectedIndex].isVisible = false;
        }
      } else {
        for (let i = 0; i < state.modals.length; i++) {
          const modal = state.modals[i];
          modal.isVisible = false;
        }
      }
      return state;

    case types.REMOVE_MODAL:
      if (action.payload) {
        if (selectedIndex !== -1) {
          state.modals.splice(selectedIndex, 1);
        }
      } else {
        state.modals = [];
      }
      return state;

    default:
      return state;
  }
});

export default startupReducer;