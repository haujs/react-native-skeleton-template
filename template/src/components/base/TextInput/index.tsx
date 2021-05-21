import {useTheme} from '@theme';
import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as NativeInput,
  TextInputFocusEventData,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Block from '../Block';
import IconComponent from '../Icon';
import Text from '../Text';
import {isIcon, isString} from '../utils';
import {InputProps} from './types';
import TextInputMask from 'react-native-text-input-mask';

const MIN_HEIGHT_INPUT = 36;

const TextInput = forwardRef<any, InputProps>((props, ref) => {
  const inputRef = useRef<NativeInput>(null);
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
    hideFocus,
    numberOfLines,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (ref) {
      (ref as any).current = inputRef.current;
    }
  }, [ref]);

  const _renderLabel = () => {
    if (isString(label)) {
      return (
        <Text
          margin={{bottom: 2}}
          size={12}
          color="primaryText"
          style={labelStyle}>
          {label}
          {required && <Text color="error"> *</Text>}
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
      paddingLeft: leftIcon ? 0 : 8,
      paddingRight: rightIcon || props.secureTextEntry ? 0 : 8,
    },
    disabled && {opacity: 0.5},
    disabled && disabledInputStyle,
    !!numberOfLines && {
      height: size * 1.6 * numberOfLines,
    },
    style,
  ]);

  const [secureEye, setSecureEye] = useState(true);

  const _renderIcon = (isRight?: boolean) => {
    const defaultIconStyle = {
      minHeight: MIN_HEIGHT_INPUT,
      paddingHorizontal: 8,
      opacity: disabled ? 0.5 : 1,
      justifyContent: 'center' as ViewStyle['justifyContent'],
    };

    if (secureTextEntry && isRight && !rightIcon) {
      return (
        <IconComponent
          style={defaultIconStyle}
          size={size}
          color={Colors.secondaryText}
          name={secureEye ? 'eye' : 'eye-off'}
          type="materialCommunityIcons"
          onPress={() => setSecureEye(prev => !prev)}
        />
      );
    }

    const [icon, iconStyle, onPressIcon] = isRight
      ? [rightIcon, rightIconContainerStyle, onRightIconPress]
      : [leftIcon, leftIconContainerStyle, onLeftIconPress];

    if (isIcon(icon)) {
      return (
        <IconComponent
          onPress={onPressIcon}
          style={StyleSheet.flatten([defaultIconStyle, iconStyle])}
          name={icon.name}
          size={icon.size || size}
          color={icon.color || Colors.secondaryText}
          type={icon.type}
        />
      );
    }

    return icon;
  };

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const _renderInput = () => {
    return (
      <TextInputMask
        underlineColorAndroid="transparent"
        style={inputInitStyle}
        autoCorrect={false}
        placeholderTextColor={Colors.secondaryText}
        editable={!disabled}
        {...rest}
        onFocus={_onFocus}
        onBlur={_onBlur}
        secureTextEntry={
          rightIcon ? props.secureTextEntry : props.secureTextEntry && secureEye
        }
        ref={inputRef}
      />
    );
  };

  return (
    <Block style={containerStyle}>
      {!!label && _renderLabel()}
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef.current?.focus();
        }}>
        <Block
          row
          align="center"
          backgroundColor="inputBG"
          border={{
            width: StyleSheet.hairlineWidth,
            color: !hideFocus && isFocused ? Colors.primary : 'transparent',
          }}
          style={inputContainerStyle}>
          {leftIcon && _renderIcon()}
          {_renderInput()}
          {(rightIcon || props.secureTextEntry) && _renderIcon(true)}
        </Block>
      </TouchableWithoutFeedback>
      {showError && error && _renderError()}
    </Block>
  );
});

export default TextInput;
