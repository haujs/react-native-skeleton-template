import React from 'react';
import {
  View,
  Text,
  ViewProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface IAlertError extends ViewProps {
  errorMsg: string;
  textStyles?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const AlertError: React.FC<IAlertError> = ({
  errorMsg,
  textStyles,
  style,
  ...props
}) => {
  return (
    <View style={[styles.errorContainer, style]} {...props}>
      <Text style={[styles.errorText, textStyles]}>{errorMsg}</Text>
    </View>
  );
};

export default AlertError;
