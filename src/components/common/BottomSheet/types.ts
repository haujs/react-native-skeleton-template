import { IProps } from 'react-native-modalize/lib/options';

export const SHOW_BOTTOM_SHEET = 'SHOW_BOTTOM_SHEET';
export const HIDE_BOTTOM_SHEET = 'HIDE_BOTTOM_SHEET';

export interface IShowBottomSheet {
  type: string;
  payload: IProps;
}
