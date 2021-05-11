import {StyleProp, ViewStyle} from 'react-native';

export interface RadioProps {
  checked?: any;
  onChange?: (checked: any) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  color?: string;
  value?: string | number;
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Default: radio
   */
  type?: 'checkbox' | 'radio';

  /**
   * Position of icon (default: left)
   */
  position?: 'left' | 'right';
}

export interface RadioGroupProps {
  selected: any;
  onSelected?: (value: any) => void;
  children?: any;
  containerStyle?: StyleProp<ViewStyle>;
}
