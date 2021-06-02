import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useTheme} from '@theme';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Block from '../Block';
import IconComponent from '../Icon';
import Text from '../Text';
import {isIcon, isString} from '../utils';
import {HEIGHT_SELECT_BOX} from './constants';
import SelectPopup from './SelectPopup';
import {SelectItemType, SelectProps} from './types';

declare type Select = {
  openSelect: () => void;
  closeSelect: () => void;
};

const Select = forwardRef<any, SelectProps>((props, ref) => {
  const {
    label,
    labelStyle,
    required,
    error,
    showError,
    errorStyle,
    leftIcon,
    leftIconContainerStyle,
    rightIcon,
    rightIconContainerStyle,
    disabled,
    data = [],
    type = 'single',
    onSelected,
    selected = type === 'single' ? {label: '', value: ''} : [],
    placeholder,
    placeholderTextColor = 'secondaryText',
    HeaderLeftComponent,
    HeaderRightComponent,
    submitText,
    submitTextStyle,
    submitDisabled,
  } = props;

  const {Colors} = useTheme();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const isMultiple = type === 'multiple';

  useImperativeHandle(
    ref,
    () => ({
      openSelect: () => bottomSheetRef.current?.present(),
      closeSelect: () => bottomSheetRef.current?.close(),
    }),
    [],
  );

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

  const _renderIcon = (isRight?: boolean) => {
    const defaultIconStyle = {
      minHeight: HEIGHT_SELECT_BOX,
      paddingHorizontal: 8,
      opacity: props.disabled ? 0.5 : 1,
      justifyContent: 'center' as ViewStyle['justifyContent'],
    };

    if (isRight && !rightIcon) {
      return (
        <IconComponent
          style={defaultIconStyle}
          size={21}
          color={Colors.secondaryText}
          name="chevron-down"
          type="ionicons"
        />
      );
    }

    const [icon, iconStyle] = isRight
      ? [rightIcon, rightIconContainerStyle]
      : [leftIcon, leftIconContainerStyle];

    if (isIcon(icon)) {
      return (
        <IconComponent
          style={StyleSheet.flatten([defaultIconStyle, iconStyle])}
          name={icon.name}
          size={icon.size || 16}
          color={icon.color || Colors.secondaryText}
          type={icon.type}
        />
      );
    }

    return icon;
  };

  const _renderSelectBox = () => {
    const placeholderColor =
      Colors[placeholderTextColor] || placeholderTextColor;

    const selectedValue = isMultiple
      ? (selected as SelectItemType[])
          .map((item: SelectItemType) => item.label)
          .join(', ')
      : (selected as SelectItemType).label;

    return (
      <Text
        flexGrow
        flexShrink
        numberOfLines={1}
        padding={{right: rightIcon ? 0 : 8, left: leftIcon ? 0 : 8}}
        color={selectedValue === '' ? placeholderColor : Colors.primaryText}>
        {selectedValue === '' ? placeholder : selectedValue}
      </Text>
    );
  };

  const _openSelectPopup = () => {
    bottomSheetRef.current?.present();
  };

  const _onPressClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const selectPopup = {
    HeaderLeftComponent,
    HeaderRightComponent,
    submitText,
    submitTextStyle,
    label,
    selected,
    isMultiple,
    onSelected,
    data,
    submitDisabled,
  };

  return (
    <Block>
      {label && _renderLabel()}
      <TouchableHighlight disabled={disabled} onPress={_openSelectPopup}>
        <Block
          height={HEIGHT_SELECT_BOX}
          backgroundColor="inputBG"
          opacity={disabled ? 0.6 : 1}
          align="center"
          row>
          {leftIcon && _renderIcon()}
          {_renderSelectBox()}
          {_renderIcon(true)}
        </Block>
      </TouchableHighlight>
      {showError && error && _renderError()}
      <SelectPopup
        ref={bottomSheetRef}
        onPressClose={_onPressClose}
        {...selectPopup}
      />
    </Block>
  );
});

export default Select;