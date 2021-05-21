export const SHOW_MODAL = '@modal/show';
export const REMOVE_MODAL = '@modal/remove';
export const CLOSE_MODAL = '@modal/close';

export const showModal = (payload: {id: string}) => ({
  type: SHOW_MODAL,
  payload,
});

export const closeModal = (payload: {id?: string}) => ({
  type: CLOSE_MODAL,
  payload,
});

export const removeModal = (payload: {id?: string}) => ({
  type: REMOVE_MODAL,
  payload,
});

export interface ModalState {
  modals: ModalType[];
}

export interface ModalType {
  id: string;
  isVisible: boolean;
}
