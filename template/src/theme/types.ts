import {TextStyle} from 'react-native';

export interface ThemeFontWeight {
  regular: FontBase;
  bold: FontBase;
  xl: FontBase;
  lg: FontBase;
  p: FontBase;
  s: FontBase;
  xs: FontBase;
}

export type FontBase = {
  fontFamily: string;
  fontWeight: TextStyle['fontWeight'];
  fontSize?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
};

export type ThemeColors = {[key: string]: string};
