import React, {Component} from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableHighlightProps,
  ViewStyle,
} from 'react-native';
import {IconComponent} from '../utils';

export interface ButtonProps extends TouchableHighlightProps {
  /**
   * Type of button. Default is **primary**
   */
  type?: 'primary' | 'outline' | 'text';

  /**
   * Label of button
   */
  title?: React.ReactNode;

  /**
   * Styling for label
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Show loading icon if loading is **true**
   */
  loading?: boolean;

  /**
   * Left icon
   */
  leftIcon?: IconComponent | React.ReactNode;

  /**
   * Styling for view containing the left icon
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Right icon
   */
  rightIcon?: IconComponent | React.ReactNode;

  /**
   * Styling for view containing the right icon
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Custom button component
   *
   * Default: TouchableHighlight
   */
  ButtonComponent?: typeof Component;

  /**
   * Styling for view containing
   */
  containerStyle?: StyleProp<ViewStyle>;
}
