import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Image from '@components/common/Image';
import { decor } from '@utils/images';

interface IAuthForm {
  children: React.ReactNode;
}

const AuthFormContainer: React.FC<IAuthForm> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>{children}</View>
      <View style={styles.logoContainer}>
        <View style={styles.shadowStyle} />
        <View style={styles.imgContainer}>
          <Image source={decor} />
        </View>
      </View>
    </View>
  );
};

export default AuthFormContainer;
