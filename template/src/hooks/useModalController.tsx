import {
  closeModal,
  ModalState,
  removeModal,
  showModal,
} from '@store/actions-types/modal';
import {useDispatch, useSelector} from 'react-redux';

const useModalController = ({id}: {id: string}) => {
  const dispatch = useDispatch();

  const modalState = useSelector((state: {modal: ModalState}) => {
    const modalItem = state.modal.modals.find(m => m.id === id);
    if (modalItem) {
      return modalItem;
    }
    return {isVisible: false, customProps: undefined};
  });

  const show = (customProps?: {[key: string]: any}) => {
    if (customProps?.persist) {
      customProps.persist();
      dispatch(showModal({id}));
    } else {
      dispatch(showModal({id, customProps}));
    }
  };

  const hide = () => dispatch(closeModal({id}));
  const remove = () => dispatch(removeModal({id}));

  return {show, hide, remove, ...modalState};
};

export default useModalController;
