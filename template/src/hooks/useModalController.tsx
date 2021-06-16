import {closeModal, removeModal, showModal} from '@store/actions/modal';
import {getModalById} from '@store/selectors/modal';
import {useDispatch, useSelector} from 'react-redux';

interface UseModalControllerResponse {
  show: (customProps?: {[key: string]: any}) => void;
  close: () => void;
  dismiss: () => void;
  isVisible: boolean;
  customProps?: {[key: string]: any};
}

const useModalController = ({id}: {id: string}): UseModalControllerResponse => {
  const dispatch = useDispatch();
  const modalState = useSelector(getModalById(id));

  const show = (customProps?: {[key: string]: any}) => {
    if (customProps?.persist) {
      customProps.persist();
      dispatch(showModal({id}));
    } else {
      dispatch(showModal({id, customProps}));
    }
  };

  const close = () => dispatch(closeModal({id}));
  const dismiss = () => dispatch(removeModal({id}));

  return {show, close, dismiss, ...modalState};
};

export default useModalController;
