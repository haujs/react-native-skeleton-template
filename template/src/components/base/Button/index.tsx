import {getIconComponent} from '@assets/icons';
import {useTheme} from '@theme';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Block from '../Block';
import Text from '../Text';
import {isIcon, isString} from '../utils';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = props => {
  const {Colors} = useTheme();
  const {
    title,
    style,
    loading,
    icon,
    iconContainerStyle,
    type,
    titleStyle,
    disabled,
    ...rest
  } = props;

  const initContainerStyle = StyleSheet.flatten([
    {
      backgroundColor: Colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 16,
      alignItems: 'center' as ViewStyle['alignItems'],
    },
    (loading || disabled) && {opacity: 0.5},
    type === 'outline' && {
      backgroundColor: 'transparent',
      borderColor: Colors.primary,
      borderWidth: StyleSheet.hairlineWidth,
    },
    type === 'ghost' && {
      backgroundColor: 'transparent',
    },
    style,
  ]);

  const _renderIcon = () => {
    if (isIcon(icon)) {
      const IconComponent = getIconComponent(icon.type);
      return (
        <Block margin={{right: 6}} style={iconContainerStyle}>
          <IconComponent
            name={icon.name}
            size={icon.size || 21}
            color={
              icon.color
                ? icon.color
                : type === 'outline' || type === 'ghost'
                ? Colors.primary
                : 'white'
            }
          />
        </Block>
      );
    }
    return icon;
  };

  return (
    <TouchableOpacity
      {...rest}
      disabled={loading || disabled}
      style={initContainerStyle}>
      <Block row align="center">
        {loading && (
          <Block margin={{right: 10}}>
            <ActivityIndicator color="white" />
          </Block>
        )}
        {!loading && icon && _renderIcon()}
        {isString(title) ? (
          <Text
            color={
              type === 'outline' || type === 'ghost' ? Colors.primary : 'white'
            }
            size={16}
            fontType="bold"
            style={titleStyle}>
            {title}
          </Text>
        ) : (
          title
        )}
      </Block>
    </TouchableOpacity>
  );
};

export default Button;
