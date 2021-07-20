import * as actions from '@store/actions/commonAction';
import {AlertType, CommonState, ModalType} from '@store/types/commonType';
import produce from 'immer';

const INITIAL_STATE = {
  modals: [],
  alerts: [],
  bottomMenu: null,
};

const startupReducer = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* Alert reducer */
    case actions.SHOW_ALERT:
      return addAlert(state, action.payload);

    case actions.CLOSE_ALERT:
      return closeAlert(state, action.payload);

    case actions.DISMISS_ALERT:
      return dismissAlert(state, action.payload);
    /* Alert reducer end */

    case actions.SHOW_MODAL:
      return showModal(state, action.payload);

    case actions.CLOSE_MODAL:
      return closeModal(state, action.payload);

    case actions.REMOVE_MODAL:
      return dismissModal(state, action.payload);

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

const addAlert = (state: CommonState, payload: AlertType) => {
  const alertIdx = state.alerts.findIndex(
    (alert: AlertType) => alert.id === payload.id,
  );
  const alertParams = {
    ...payload,
    isVisible: true,
  };
  if (alertIdx !== -1) {
    state.alerts[alertIdx] === alertParams;
  } else {
    state.alerts.push(alertParams);
  }
};

const closeAlert = (state: CommonState, payload?: AlertType) => {
  if (payload) {
    const alertIndex = state.alerts.findIndex(
      (alert: AlertType) => alert.id === payload.id,
    );
    if (alertIndex !== -1) {
      state.alerts[alertIndex].isVisible = false;
    }
  } else {
    for (let i = 0; i < state.alerts.length; i++) {
      state.alerts[i].isVisible = false;
    }
  }
};

const dismissAlert = (state: CommonState, payload?: AlertType) => {
  if (payload) {
    state.alerts = state.alerts.filter(
      (alert: AlertType) => alert.id !== payload.id,
    );
  } else {
    state.alerts = [];
  }
};

const showModal = (state: CommonState, payload: ModalType) => {
  const selectedIndex = state.modals.findIndex(
    (modal: ModalType) => modal.id === payload?.id,
  );
  if (selectedIndex !== -1) {
    state.modals[selectedIndex].isVisible = true;
    state.modals[selectedIndex].customProps = payload.customProps || {};
  } else {
    state.modals.push({
      id: payload.id,
      isVisible: true,
      customProps: payload.customProps || {},
    });
  }
};

const closeModal = (state: CommonState, payload?: ModalType) => {
  if (payload) {
    const modalIdx = state.modals.findIndex(
      (modal: ModalType) => modal.id === payload.id,
    );
    if (modalIdx !== -1) {
      state.modals[modalIdx].isVisible = false;
    }
  } else {
    for (let i = 0; i < state.modals.length; i++) {
      const modal = state.modals[i];
      modal.isVisible = false;
    }
  }
};

const dismissModal = (state: CommonState, payload: ModalType) => {
  if (payload) {
    const selectedIndex = state.modals.findIndex(
      (modal: ModalType) => modal.id === payload?.id,
    );
    if (selectedIndex !== -1) {
      state.modals.splice(selectedIndex, 1);
    }
  } else {
    state.modals = [];
  }
};
