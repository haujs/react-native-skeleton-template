import {Platform} from 'react-native';
import {ThemeFontWeight} from './types';

export const Fonts: ThemeFontWeight = {
  regular: Platform.select({
    ios: {fontWeight: 'normal', fontFamily: 'HiraginoSans-W3'},
    android: {fontWeight: 'normal', fontFamily: 'Roboto'},
    default: {fontWeight: 'normal', fontFamily: 'System'},
  }),
  bold: Platform.select({
    ios: {fontWeight: 'bold', fontFamily: 'HiraginoSans-W3'},
    android: {fontWeight: 'bold', fontFamily: 'Roboto'},
    default: {fontWeight: 'normal', fontFamily: 'System'},
  }),
};
