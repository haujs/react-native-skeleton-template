import {useModalController} from '@hooks';
import {useTheme} from '@theme';
import Helper from '@utils/helpers';
import moment from 'moment';
import React, {useMemo} from 'react';
import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Block from '../Block';
import IconComponent from '../Icon';
import Text from '../Text';
import {isIcon, isString} from '../utils';
import Picker from './Picker';
import {DateTimePickerProps} from './types';

const DateTimePicker: React.FC<DateTimePickerProps> = props => {
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
    placeholder,
    placeholderTextColor = 'secondaryText',
    containerStyle,
    inputContainerStyle,
    value,
    onChange,
    mode = 'date',
    maximumDate,
    minimumDate,
    valueFormat = mode === 'date' ? 'DD/MM/YYYY' : 'HH:mm',
  } = props;

  const {Colors} = useTheme();

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
      minHeight: 36,
      paddingHorizontal: 8,
      opacity: disabled ? 0.5 : 1,
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

  const _renderDateTimeValue = () => {
    return (
      <Text
        flexGrow
        flexShrink
        numberOfLines={1}
        padding={{right: rightIcon ? 0 : 8, left: leftIcon ? 0 : 8}}
        color={value === '' ? placeholderTextColor : Colors.primaryText}>
        {value === '' ? placeholder : value}
      </Text>
    );
  };

  const pickerId = useMemo(() => Helper.generateUUID(), []);
  const pickerState = useModalController({id: `date_time_picker_${pickerId}`});

  const _onPressDone = (date?: Date) => {
    onChange && onChange(moment(date).format(valueFormat));
  };

  return (
    <Block style={containerStyle}>
      {label && _renderLabel()}
      <TouchableHighlight disabled={disabled} onPress={pickerState.show}>
        <Block
          height={36}
          backgroundColor="inputBG"
          opacity={disabled ? 0.6 : 1}
          align="center"
          row
          style={inputContainerStyle}>
          {leftIcon && _renderIcon()}
          {_renderDateTimeValue()}
          {_renderIcon(true)}
        </Block>
      </TouchableHighlight>
      {showError && error && _renderError()}
      <Picker
        {...pickerState}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        mode={mode}
        value={value === '' ? new Date() : moment(value, valueFormat).toDate()}
        onPressDone={_onPressDone}
      />
    </Block>
  );
};

export default DateTimePicker;
