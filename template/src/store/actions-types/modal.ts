import {MenuItemType} from '@components/base/BottomMenu/types';
import {BottomSheetModalProps} from '@gorhom/bottom-sheet';
import {StyleProp, TextStyle} from 'react-native';

export const SHOW_MODAL = '@modal/show';
export const REMOVE_MODAL = '@modal/remove';
export const CLOSE_MODAL = '@modal/close';

export const showModal = (payload: {id: string; customProps?: any}) => ({
  type: SHOW_MODAL,
  payload,
});

export const closeModal = (payload: {id?: string}) => ({
  type: CLOSE_MODAL,
  payload,
});

export const removeModal = (payload: {id?: string}) => ({
  type: REMOVE_MODAL,
  payload,
});

export interface ModalType {
  id: string;
  isVisible: boolean;
  customProps?: {[key: string]: any};
}

export const SHOW_ALERT = '@alert/show';
export const CLOSE_ALERT = '@alert/close';
export const DISMISS_ALERT = '@alert/dismiss';

export const showAlert = (payload: AlertPayload) => ({
  type: SHOW_ALERT,
  payload,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});

export const dismissAlert = () => ({
  type: DISMISS_ALERT,
});

export interface AlertButton {
  text: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
}
export interface AlertPayload {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  options?: {
    cancelable?: boolean;
  };
  override?: boolean;
}

export interface AlertType extends AlertPayload {
  isVisible?: boolean;
}

export const SHOW_BOTTOM_MENU = '@bottom_menu/show';
export const CLOSE_BOTTOM_MENU = '@bottom_menu/close';

export const showBottomMenu = (payload: BottomMenuPayload) => ({
  type: SHOW_BOTTOM_MENU,
  payload,
});

export const closeBottomMenu = () => ({
  type: CLOSE_BOTTOM_MENU,
});

export interface BottomMenuPayload {
  data: MenuItemType[];
  bottomSheetModalProps?: Partial<BottomSheetModalProps>;
}

export interface BottomMenuType extends BottomMenuPayload {
  isVisible?: boolean;
}

export interface ModalState {
  modals: ModalType[];
  alert: AlertType;
  bottomMenu: BottomMenuType;
}
