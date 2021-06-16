import {MenuItemType} from '@components/base/BottomMenu/types';
import {BottomSheetModalProps} from '@gorhom/bottom-sheet';
import {StyleProp, TextStyle} from 'react-native';

export interface ModalType {
  id: string;
  isVisible: boolean;
  customProps?: {[key: string]: any};
}

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
