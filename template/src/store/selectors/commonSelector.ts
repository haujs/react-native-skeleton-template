import {CommonState} from '@store/types/commonType';
import {createSelector} from 'reselect';

export const getAlertState = (state: {common: CommonState}) =>
  state.common.alerts;

export const getBottomMenuState = (state: {common: CommonState}) =>
  state.common.bottomMenu || {isVisible: false};

export const getModalState = (state: {common: CommonState}) =>
  state.common.modals;

export const getModalById = (id: string) =>
  createSelector(getModalState, modals => {
    const modalItem = modals.find(m => m.id === id);
    if (modalItem) {
      return modalItem;
    }
    return {isVisible: false};
  });
