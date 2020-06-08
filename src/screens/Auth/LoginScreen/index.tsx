import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface ILoginScreen {}

const LoginScreen: React.FC<ILoginScreen> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
