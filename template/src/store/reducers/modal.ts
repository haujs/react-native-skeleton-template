import * as actions from '@store/actions/modal';
import {ModalType} from '@store/types/modal';
import produce from 'immer';

const INITIAL_STATE = {
  modals: [],
  alert: null,
  bottomMenu: null,
};

const startupReducer = produce((state = INITIAL_STATE, action) => {
  const selectedIndex = state.modals.findIndex(
    (modal: ModalType) => modal.id === action.payload?.id,
  );
  switch (action.type) {
    case actions.SHOW_MODAL:
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

    case actions.CLOSE_MODAL:
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

    case actions.REMOVE_MODAL:
      if (action.payload) {
        if (selectedIndex !== -1) {
          state.modals.splice(selectedIndex, 1);
        }
      } else {
        state.modals = [];
      }
      return state;

    case actions.SHOW_ALERT:
      state.alert = {
        isVisible: true,
        ...action.payload,
        override: !!state.alert,
      };
      return state;

    case actions.CLOSE_ALERT:
      if (state.alert) {
        state.alert.isVisible = false;
      }
      return state;

    case actions.DISMISS_ALERT:
      state.alert = null;
      return state;

    case actions.SHOW_BOTTOM_MENU:
      state.bottomMenu = {...action.payload, isVisible: true};
      return state;

    case actions.CLOSE_BOTTOM_MENU:
      state.bottomMenu = null;
      return state;

    default:
      return state;
  }
});

export default startupReducer;
