import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IStartScreen {}

const StartScreen: React.FC<IStartScreen> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>StartScreen</Text>
    </View>
  );
};

export default StartScreen;
