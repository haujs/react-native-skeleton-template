import {getSize} from '@utils/responsive';
import {Platform} from 'react-native';
import {ThemeFontWeight} from './types';

export const Fonts: ThemeFontWeight = {
  regular: {
    fontWeight: 'normal',
    fontSize: getSize.m(14),
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  bold: {
    fontWeight: 'bold',
    fontSize: getSize.m(14),
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  xl: {
    fontWeight: 'bold',
    fontSize: getSize.m(22),
    lineHeight: getSize.m(24),
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  lg: {
    fontWeight: 'bold',
    fontSize: getSize.m(14),
    lineHeight: getSize.m(22),
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  p: {
    fontWeight: 'normal',
    fontSize: getSize.m(14),
    lineHeight: getSize.m(20),
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  s: {
    fontWeight: 'normal',
    fontSize: getSize.m(12),
    lineHeight: getSize.m(18),
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
  xs: {
    fontWeight: 'normal',
    fontSize: getSize.m(10),
    lineHeight: getSize.m(14),
    fontFamily: Platform.select({
      ios: 'HiraginoSans-W3',
      android: 'Roboto',
      default: 'System',
    }),
  },
};
