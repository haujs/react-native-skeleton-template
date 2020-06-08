import React, { useRef, useEffect } from 'react';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { hideBottomSheet } from './actions';
import { IProps } from 'react-native-modalize/lib/options';

interface IBottomSheet {
  isOpen: boolean;
  customProps: IProps;
}

const BottomSheet = () => {
  const dispatch = useDispatch();
  const modalizeRef = useRef<Modalize>(null);

  const typedUseSelector: TypedUseSelectorHook<{
    bottomSheet: IBottomSheet;
  }> = useSelector;
  const { isOpen, customProps } = typedUseSelector(
    (state) => state.bottomSheet,
  );

  useEffect(() => {
    if (isOpen) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [isOpen]);

  return (
    <Modalize
      ref={modalizeRef}
      onClose={() => dispatch(hideBottomSheet())}
      {...customProps}
    />
  );
};

export default BottomSheet;
