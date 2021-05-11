import {
  GestureResponderEvent,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {IconComponent} from '../utils';

export interface InputProps extends TextInputProps {
  /**
   * Styling for view containing label, input and error message
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * if **true**, text is not editable
   */
  disabled?: boolean;

  /**
   * Style of input when disabled
   */
  disabledInputStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for view containing input
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Style of input
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Specifies font weight.
   *
   * Default is **"regular"**
   */
  fontType?: 'regular' | 'bold';

  /**
   * Size of text
   *
   * Default is **14**
   */
  size?: number;

  /**
   * Label of input
   */
  label?: React.ReactNode;

  /**
   * Style of label if label is string
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * Add **"*"** after label if label is string
   */
  required?: boolean;

  /**
   * Error message
   */
  error?: React.ReactNode;

  /**
   * Style of error message if error is string
   */
  errorStyle?: StyleProp<TextStyle>;

  /**
   * Show error message
   */
  showError?: boolean;

  /**
   * Left icon
   */
  leftIcon?: IconComponent | React.ReactNode;

  /**
   * Styling for view containing the left icon
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Action when press left icon
   */
  onLeftIconPress?: (e: GestureResponderEvent) => void;

  /**
   * Right icon
   */
  rightIcon?: IconComponent | React.ReactNode;

  /**
   * Styling for view containing the right icon
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Action when press right icon
   */
  onRightIconPress?: (e: GestureResponderEvent) => void;
}
