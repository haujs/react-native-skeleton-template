import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface ISignUpScreen {}

const SignUpScreen: React.FC<ISignUpScreen> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;
