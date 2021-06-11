import {DateTimePickerProps} from '@components/base/DateTimePicker/types';
import {Control} from 'react-hook-form';

export interface FormDateTimePickerProps extends DateTimePickerProps {
  name: string;
  control: Control<any>;
}
