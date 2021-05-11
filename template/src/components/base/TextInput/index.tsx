import {getIconComponent} from '@assets/icons';
import {useTheme} from '@theme';
import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as NativeInput,
  TextInputFocusEventData,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Block from '../Block';
import Text from '../Text';
import {isIcon, isString} from '../utils';
import Icon from './Icon';
import {InputProps} from './types';

const MIN_HEIGHT_INPUT = 36;

const TextInput: React.FC<InputProps> = props => {
  const {Colors, Fonts} = useTheme();

  const {
    label,
    labelStyle,
    required,
    containerStyle,
    error,
    errorStyle,
    showError,
    inputContainerStyle,
    style,
    fontType = 'regular',
    size = 14,
    disabled,
    disabledInputStyle,
    leftIcon,
    leftIconContainerStyle,
    onLeftIconPress,
    rightIcon,
    rightIconContainerStyle,
    onRightIconPress,
    secureTextEntry,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const _renderLabel = () => {
    if (isString(label)) {
      return (
        <Text
          margin={{bottom: 2}}
          size={12}
          color="primaryText"
          style={labelStyle}>
          {label}
          {required && <Text color="error">*</Text>}
        </Text>
      );
    }
    return label;
  };

  const _renderError = () => {
    if (isString(error)) {
      return (
        <Text margin={{top: 2}} size={10} color="error" style={errorStyle}>
          <MaterialCommunityIcons
            name="information-outline"
            color={Colors.error}
            size={10}
          />
          <Text> {error}</Text>
        </Text>
      );
    }
    return error;
  };

  const inputInitStyle = StyleSheet.flatten([
    Fonts[fontType],
    {
      color: Colors.primaryText,
      fontSize: size,
      minHeight: MIN_HEIGHT_INPUT,
      flex: 1,
    },
    disabled && {opacity: 0.5},
    disabled && disabledInputStyle,
    style,
  ]);

  const [secureEye, setSecureEye] = useState(true);

  const _renderIcon = (isRight?: boolean) => {
    const defaultIconStyle = {
      height: MIN_HEIGHT_INPUT,
      paddingRight: isRight ? 0 : 8,
      paddingLeft: isRight ? 8 : 0,
      opacity: disabled ? 0.5 : 1,
    };

    if (secureTextEntry && isRight && !rightIcon) {
      const IconComponent = getIconComponent('materialCommunityIcons');
      return (
        <Icon
          onPress={() => setSecureEye(prev => !prev)}
          containerStyle={defaultIconStyle}
          IconComponent={
            <IconComponent
              name={secureEye ? 'eye' : 'eye-off'}
              size={size}
              color={Colors.secondaryText}
            />
          }
        />
      );
    }
    const [icon, iconStyle, onPressIcon] = isRight
      ? [rightIcon, rightIconContainerStyle, onRightIconPress]
      : [leftIcon, leftIconContainerStyle, onLeftIconPress];

    if (isIcon(icon)) {
      const IconComponent = getIconComponent(icon.type);
      return (
        <Icon
          onPress={onPressIcon}
          containerStyle={[defaultIconStyle, StyleSheet.flatten(iconStyle)]}
          IconComponent={
            <IconComponent
              name={icon.name}
              size={icon.size || size}
              color={icon.color || Colors.secondaryText}
            />
          }
        />
      );
    }

    return (
      <Icon
        containerStyle={[defaultIconStyle, StyleSheet.flatten(iconStyle)]}
        IconComponent={icon}
      />
    );
  };

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  return (
    <Block style={containerStyle}>
      {!!label && _renderLabel()}
      <Block
        row
        align="center"
        backgroundColor="inputBG"
        padding={{horizontal: 8}}
        border={{
          width: StyleSheet.hairlineWidth,
          color: isFocused ? Colors.primary : 'transparent',
        }}
        style={inputContainerStyle}>
        {leftIcon && _renderIcon()}
        <NativeInput
          underlineColorAndroid="transparent"
          style={inputInitStyle}
          autoCorrect={false}
          placeholderTextColor={Colors.secondaryText}
          editable={!disabled}
          {...rest}
          onFocus={_onFocus}
          onBlur={_onBlur}
          secureTextEntry={props.secureTextEntry && secureEye}
        />
        {(rightIcon || props.secureTextEntry) && _renderIcon(true)}
      </Block>
      {showError && error && _renderError()}
    </Block>
  );
};

export default TextInput;
