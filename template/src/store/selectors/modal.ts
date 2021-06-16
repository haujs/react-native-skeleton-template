import {ModalState} from '@store/types/modal';
import {createSelector} from 'reselect';

export const getAlertState = (state: {modal: ModalState}) =>
  state.modal.alert || {isVisible: false};

export const getBottomMenuState = (state: {modal: ModalState}) =>
  state.modal.bottomMenu || {isVisible: false};

export const getModalState = (state: {modal: ModalState}) => state.modal.modals;

export const getModalById = (id: string) =>
  createSelector(getModalState, modals => {
    const modalItem = modals.find(m => m.id === id);
    if (modalItem) {
      return modalItem;
    }
    return {isVisible: false};
  });
