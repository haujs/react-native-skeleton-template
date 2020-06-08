import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useCustomTheme } from '@hooks';
import { getSize } from '@utils/responsive';
export interface IModal {
  isVisible: boolean;
  animationIn: any;
  animationOut: any;
}

const ModalBox: React.FC<IModal> = ({ children, ...props }) => {
  const { colors } = useCustomTheme();

  const styles = StyleSheet.create({
    content: {
      backgroundColor: colors.white,
      paddingVertical: getSize.h(22),
      paddingHorizontal: getSize.w(22),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Modal {...props}>
      <View style={styles.content}>{children}</View>
    </Modal>
  );
};

export default ModalBox;
