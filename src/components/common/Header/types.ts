import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { Source } from 'react-native-fast-image';

export type HeaderIconType = {
  color?: string;
  size?: number;
  name: string;
};

export type HeaderImageType = {
  source: Source | number;
  width?: number;
  height?: number;
};

export type HeaderTextType = {
  content: 'string';
  style?: StyleProp<TextStyle>;
};

export interface IHeader {
  title?: string;
  mode?: 'main';
  titleStyles?: TextStyle;
  containerStyles?: ViewStyle;
  iconLeft?: HeaderIconType;
  iconRight?: HeaderIconType;
  imageRight?: HeaderImageType;
  imageLeft?: HeaderImageType;
  textRight?: HeaderTextType;
  textLeft?: HeaderTextType;
  headerLeftOnPressed?: () => void;
  headerRightOnPressed?: () => void;
  goBack?: boolean;
  goHome?: boolean;
  removeSafeArea?: boolean;
}
