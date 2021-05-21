import {ModalControllerContext} from '@providers/ModalController';
import {ModalState} from '@store/actions-types/modal';
import {useContext} from 'react';
import {useSelector} from 'react-redux';

const useModalController = ({id}: {id: string}) => {
  const {show, hide, remove} = useContext(ModalControllerContext);

  const isVisible = useSelector((state: {modal: ModalState}) => {
    const modalItem = state.modal.modals.find(m => m.id === id);
    if (modalItem) {
      return modalItem.isVisible;
    }
    return false;
  });

  const showModal = () => show(id);
  const hideModal = () => hide(id);
  const removeModal = () => remove(id);

  return {showModal, hideModal, removeModal, isVisible};
};

export default useModalController;
