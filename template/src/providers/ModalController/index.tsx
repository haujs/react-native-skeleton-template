import {closeModal, removeModal, showModal} from '@store/actions-types/modal';
import React, {createContext} from 'react';
import {useDispatch} from 'react-redux';
import {ModalControllerContextProps} from './types';

export const ModalControllerContext =
  createContext<ModalControllerContextProps>({
    show: () => null,
    hide: () => null,
    remove: () => null,
  });

const ModalControllerProvider: React.FC = ({children}) => {
  const dispatch = useDispatch();

  const modalControllerContext = React.useMemo(
    () => ({
      show: (id: string) => dispatch(showModal({id})),
      hide: (id?: string) => dispatch(closeModal({id})),
      remove: (id?: string) => dispatch(removeModal({id})),
    }),
    [dispatch],
  );

  return (
    <ModalControllerContext.Provider value={modalControllerContext}>
      {children}
    </ModalControllerContext.Provider>
  );
};

export default ModalControllerProvider;
