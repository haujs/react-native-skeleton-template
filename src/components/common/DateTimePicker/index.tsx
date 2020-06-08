import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { useCustomTheme } from '@hooks';
import { getSize } from '@utils/responsive';
import { FormikHandlers } from 'formik';
import { Icon } from '@assets/icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from './styles';
import { renderLabel, renderError } from '../Error';

interface IFormikProps extends FormikHandlers {
  values: any;
  errors: any;
  touched: any;
  setFieldValue(formikKey: string, arg1: string): void;
  setFieldTouched(formikKey: string): void;
}

interface ITextInput extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  required?: boolean;
  containerStyle?: ViewStyle;
  inputHeight?: number;
  textInputStyle?: TextStyle;
  formikProps: IFormikProps;
  formikKey: string;
  errorTextStyles?: TextStyle;
  rightIconSize?: number;
  maximumDate?: Date;
  minimumDate?: Date;
}

const DateTimePicker: React.FC<ITextInput> = ({
  label,
  labelStyle,
  required,
  containerStyle,
  inputHeight,
  textInputStyle,
  formikProps,
  formikKey,
  errorTextStyles,
  rightIconSize,
  maximumDate,
  minimumDate,
  ...props
}: ITextInput) => {
  const { colors } = useCustomTheme();
  const [isShow, setIsShow] = useState(false);
  const dateValue = (formikProps.values as any)[formikKey];
  const isError =
    formikProps.touched[formikKey] && formikProps.errors[formikKey];

  const renderTextInput = () => (
    <TextInput
      {...props}
      pointerEvents="none"
      editable={false}
      placeholderTextColor={colors.whiteTwo}
      style={[
        styles.textStyle,
        { height: inputHeight || getSize.h(25) },
        textInputStyle,
      ]}
      value={
        dateValue !== '' ? moment(dateValue).format('YYYY-MM-DD(ddd)') : ''
      }
    />
  );

  const renderIconRight = () => (
    <View style={styles.iconRightContainer}>
      <Icon name="icon-calendar" size={rightIconSize || getSize.h(35)} />
    </View>
  );

  const renderDateTimeModal = () => (
    <DateTimePickerModal
      isVisible={isShow}
      mode="date"
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      date={moment(dateValue || new Date(), 'YYYY-MM-DD').toDate()}
      onConfirm={(date: Date) => {
        formikProps.setFieldTouched(formikKey);
        formikProps.setFieldValue(formikKey, moment(date).format('YYYY-MM-DD'));
        setIsShow(false);
      }}
      onCancel={() => setIsShow(false)}
    />
  );

  return (
    <View style={containerStyle}>
      {label && label !== '' && renderLabel(label, required, labelStyle)}
      <TouchableOpacity onPress={() => setIsShow(true)}>
        <View style={[styles.textInput, { borderColor: colors.whiteTwo }]}>
          {renderTextInput()}
          {renderIconRight()}
        </View>
      </TouchableOpacity>
      {isError && renderError(formikProps.errors[formikKey], errorTextStyles)}
      {renderDateTimeModal()}
    </View>
  );
};

export default DateTimePicker;
