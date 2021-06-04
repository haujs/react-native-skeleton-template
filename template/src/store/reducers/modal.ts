import * as types from '@store/actions-types/modal';
import produce from 'immer';

const INITIAL_STATE = {
  modals: [],
  alert: null,
};

const startupReducer = produce((state = INITIAL_STATE, action) => {
  const selectedIndex = state.modals.findIndex(
    (modal: types.ModalType) => modal.id === action.payload?.id,
  );
  switch (action.type) {
    case types.SHOW_MODAL:
      if (selectedIndex !== -1) {
        state.modals[selectedIndex].isVisible = true;
        state.modals[selectedIndex].customProps =
          action.payload.customProps || {};
      } else {
        state.modals.push({
          id: action.payload.id,
          isVisible: true,
          customProps: action.payload.customProps || {},
        });
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

    case types.SHOW_ALERT:
      state.alert = action.payload;
      return state;

    case types.CLOSE_ALERT:
      state.alert = null;
      return state;

    default:
      return state;
  }
});

export default startupReducer;
