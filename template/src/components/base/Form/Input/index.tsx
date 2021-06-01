import TextInput from '@components/base/TextInput';
import React from 'react';
import {Controller} from 'react-hook-form';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {FormInputProps} from './types';

const FormInput: React.FC<FormInputProps> = ({
  name,
  error,
  control,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: {onChange, onBlur, value, ref},
        formState: {errors},
      }) => (
        <TextInput
          {...props}
          ref={ref}
          value={value}
          onChangeText={(text: string) => {
            onChange(text);
            props.onChangeText && props.onChangeText(text);
          }}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            onBlur();
            props.onBlur && props.onBlur(e);
          }}
          error={error || errors[name]?.message}
        />
      )}
      defaultValue=""
    />
  );
};

export default FormInput;
