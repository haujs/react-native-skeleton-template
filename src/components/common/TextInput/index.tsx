import React from 'react';
import {
  View,
  TextInput,
  TextInputProperties,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useCustomTheme } from '@hooks';
import { getSize } from '@utils/responsive';
import { FormikHandlers } from 'formik';
import { Icon } from '@assets/icons';
import styles from './styles';
import { renderError, renderLabel } from '../Error';

interface IFormikProps extends FormikHandlers {
  values: any;
  errors: any;
  touched: any;
  setFieldTouched(formikKey: string): void;
}

interface ITextInput extends TextInputProperties {
  label?: string;
  labelStyle?: TextStyle;
  required?: boolean;
  containerStyle?: ViewStyle;
  iconRight?: string;
  iconRightPress?: () => void;
  iconRightStyles?: ViewStyle;
  inputHeight?: number;
  textInputStyle?: TextStyle;
  formikProps: IFormikProps;
  formikKey: string;
  errorTextStyles?: TextStyle;
  rightIconSize?: number;
}

const Input: React.FC<ITextInput> = ({
  label,
  labelStyle,
  required,
  containerStyle,
  iconRight,
  iconRightPress,
  iconRightStyles,
  inputHeight,
  textInputStyle,
  formikProps,
  formikKey,
  errorTextStyles,
  rightIconSize,
  ...props
}) => {
  const { colors } = useCustomTheme();
  const isError =
    formikProps.touched[formikKey] && formikProps.errors[formikKey];

  const renderTextInput = () => (
    <TextInput
      {...props}
      placeholderTextColor={colors.whiteTwo}
      textAlignVertical="top"
      style={[
        styles.textStyle,
        { height: inputHeight || getSize.h(25) },
        textInputStyle,
      ]}
      onChangeText={formikProps.handleChange(formikKey)}
      value={(formikProps.values as any)[formikKey]}
      onBlur={() => formikProps.setFieldTouched(formikKey)}
    />
  );

  const renderIcon = (icon: string) => (
    <TouchableOpacity
      onPress={iconRightPress}
      style={[styles.iconRightContainer, iconRightStyles]}>
      <Icon name={icon} size={rightIconSize || getSize.h(24)} />
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      {label && label !== '' && renderLabel(label, required, labelStyle)}
      <View style={[styles.textInput, { borderColor: colors.whiteTwo }]}>
        {renderTextInput()}
        {iconRight && iconRight !== '' && renderIcon(iconRight)}
      </View>
      {isError && renderError(formikProps.errors[formikKey], errorTextStyles)}
    </View>
  );
};

export default Input;
