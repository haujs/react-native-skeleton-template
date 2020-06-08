import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProperties,
  ViewStyle,
  TouchableHighlight,
  StyleProp,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useCustomTheme } from '@hooks';
import styles from './styles';

export interface IButton extends TouchableOpacityProperties {
  mode?: 'gradient';
  horizontalGradient?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  gradientColor?: Array<string>;
  centerItem?: boolean;
  shadow?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<IButton> = ({
  mode,
  horizontalGradient,
  children,
  containerStyles,
  gradientColor,
  centerItem,
  disabled,
  shadow,
  style,
  ...props
}) => {
  const { colors } = useCustomTheme();
  const alignItems = centerItem ? 'center' : 'flex-start';
  const opacity = disabled ? 0.5 : 1;

  if (mode === 'gradient') {
    return (
      <TouchableHighlight
        style={[style, { opacity }, shadow && styles.touchableStyle]}
        {...props}
        disabled={disabled}>
        <LinearGradient
          colors={
            gradientColor ? gradientColor : [colors.rouge, colors.brightOrange]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: horizontalGradient ? 1 : 0, y: horizontalGradient ? 0 : 1 }}
          style={[styles.linearGradient, { alignItems }, containerStyles]}>
          {children}
        </LinearGradient>
      </TouchableHighlight>
    );
  }

  return (
    <TouchableOpacity
      style={[style, { opacity }, shadow && styles.touchableStyle]}
      {...props}
      disabled={disabled}>
      <View style={[styles.normalStyle, { alignItems }, containerStyles]}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
