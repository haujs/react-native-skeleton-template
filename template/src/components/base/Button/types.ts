import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {IconComponent} from '../utils';

export interface ButtonProps extends TouchableOpacityProps {
  title?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;

  loading?: boolean;

  icon?: IconComponent | React.ReactNode;
  iconContainerStyle?: StyleProp<ViewStyle>;

  type?: 'outline' | 'ghost';
}
