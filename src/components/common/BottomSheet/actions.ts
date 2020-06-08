import { SHOW_BOTTOM_SHEET, HIDE_BOTTOM_SHEET } from './types';
import { IProps } from 'react-native-modalize/lib/options';

export function showBottomSheet(payload: IProps) {
  return { type: SHOW_BOTTOM_SHEET, payload };
}

export function hideBottomSheet() {
  return { type: HIDE_BOTTOM_SHEET };
}
