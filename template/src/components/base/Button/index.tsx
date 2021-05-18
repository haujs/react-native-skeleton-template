import {useTheme} from '@theme';
import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import IconComponent from '../Icon';
import Block from '../Block';
import Text from '../Text';
import {isIcon} from '../utils';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = props => {
  const {Colors} = useTheme();

  const {
    type = 'primary',
    title,
    ButtonComponent = Platform.select<typeof React.Component>({
      android: TouchableNativeFeedback,
      default: TouchableHighlight,
    }),
    containerStyle,
    style,
    titleStyle,
    loading,
    leftIcon,
    leftIconContainerStyle,
    rightIcon,
    rightIconContainerStyle,
    ...rest
  } = props;

  const _renderIcon = (isRight?: boolean) => {
    const [icon, iconStyle] = isRight
      ? [rightIcon, rightIconContainerStyle]
      : [leftIcon, leftIconContainerStyle];

    if (isIcon(icon)) {
      return (
        <IconComponent
          style={StyleSheet.flatten([
            {paddingRight: isRight ? 0 : 8, paddingLeft: isRight ? 8 : 0},
            iconStyle,
          ])}
          name={icon.name}
          size={icon.size || 24}
          color={icon.color || (type === 'primary' ? 'white' : 'primary')}
          type={icon.type}
        />
      );
    }

    return icon;
  };

  return (
    <Block style={containerStyle}>
      <ButtonComponent {...rest} disabled={loading || props.disabled}>
        <Block
          row
          backgroundColor={type === 'primary' ? 'primary' : 'white'}
          border={{
            width: 1,
            color: type === 'text' ? 'transparent' : Colors.primary,
          }}
          opacity={loading || props.disabled ? 0.5 : 1}
          padding={{horizontal: 16, vertical: 12}}
          align="center"
          justify="center"
          style={style}>
          {leftIcon && _renderIcon()}
          {loading && (
            <Block margin={{right: 8}}>
              <ActivityIndicator
                color={type === 'primary' ? 'white' : Colors.primary}
                size="small"
              />
            </Block>
          )}
          <Text
            fontType="bold"
            color={type === 'primary' ? 'white' : 'primary'}
            size={16}
            style={titleStyle}>
            {title}
          </Text>
          {rightIcon && _renderIcon(true)}
        </Block>
      </ButtonComponent>
    </Block>
  );
};

export default Button;
