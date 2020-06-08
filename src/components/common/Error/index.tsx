import React from 'react';
import { Text, StyleProp, TextStyle, View } from 'react-native';
import styles from './styles';

export const renderError = (errMsg: string, style: StyleProp<TextStyle>) => (
  <Text style={[styles.errorText, style]}>{errMsg}</Text>
);

export const renderLabel = (
  label: string,
  required?: boolean,
  style?: StyleProp<TextStyle>,
) => (
  <View style={styles.labelContainer}>
    <Text style={[styles.labelStyle, style]}>{label}</Text>
    {required && <Text style={styles.requireText}> *</Text>}
  </View>
);
