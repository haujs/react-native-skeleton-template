import React from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProperties,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useCustomTheme, useTranslation } from '@hooks';
import { getSize } from '@utils/responsive';
import { FormikHandlers } from 'formik';
import { Icon } from '@assets/icons';
import { useDispatch } from 'react-redux';
import { showBottomSheet, hideBottomSheet } from '../BottomSheet/actions';
import styles from './styles';
import { renderError, renderLabel } from '../Error';

interface IFormikProps extends FormikHandlers {
  values: any;
  errors: any;
  touched: any;
  setFieldValue(formikKey: string, value: string): void;
  setFieldTouched(formikKey: string): void;
}

interface ITextInput extends TextInputProperties {
  label?: string;
  labelStyle?: TextStyle;
  required?: boolean;
  containerStyle?: ViewStyle;
  iconRight?: string;
  iconRightStyles?: ViewStyle;
  inputHeight?: number;
  textInputStyle?: TextStyle;
  formikProps: IFormikProps;
  formikKey: string;
  errorTextStyles?: TextStyle;
  rightIconSize?: number;
  data: Array<any>;
  onDataChanged?: (e: any) => void;
}

const Select: React.FC<ITextInput> = ({
  label,
  labelStyle,
  required,
  containerStyle,
  iconRight,
  iconRightStyles,
  inputHeight,
  textInputStyle,
  formikProps,
  formikKey,
  errorTextStyles,
  rightIconSize,
  data,
  onDataChanged,
  ...props
}) => {
  const dispatch = useDispatch();
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const isError =
    formikProps.touched[formikKey] && formikProps.errors[formikKey];

  const renderSelectItem = ({
    item,
  }: {
    item: { label: string; value: string };
  }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        formikProps.setFieldTouched(formikKey);
        formikProps.setFieldValue(formikKey, item.value);
        dispatch(hideBottomSheet());
        if (typeof onDataChanged === 'function') {
          onDataChanged(item.value);
        }
      }}>
      <Text style={styles.labelItem}>{t(item.label)}</Text>
    </TouchableOpacity>
  );

  const handleInputPress = () => {
    dispatch(
      showBottomSheet({
        snapPoint: 250,
        modalStyle: styles.modalStyle,
        flatListProps: {
          keyExtractor: (_: any, index: number) => index.toString(),
          data: data,
          renderItem: renderSelectItem,
        },
      }),
    );
  };

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
      value={t(
        data.find(
          (item) => item.value === (formikProps.values as any)[formikKey],
        )?.label ?? '',
      )}
    />
  );

  const renderIcon = () => (
    <View style={[styles.iconRightContainer, iconRightStyles]}>
      <Icon name={iconRight || 'down'} size={rightIconSize || getSize.h(30)} />
    </View>
  );

  return (
    <View style={containerStyle}>
      {label && label !== '' && renderLabel(label, required, labelStyle)}
      <TouchableOpacity onPress={handleInputPress}>
        <View style={[styles.textInput, { borderColor: colors.whiteTwo }]}>
          {renderTextInput()}
          {renderIcon()}
        </View>
      </TouchableOpacity>
      {isError && renderError(formikProps.errors[formikKey], errorTextStyles)}
    </View>
  );
};

export default Select;
