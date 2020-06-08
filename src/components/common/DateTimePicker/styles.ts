import { StyleSheet } from 'react-native';
import { getSize } from '@utils/responsive';
import theme from '@theme';

export default StyleSheet.create({
  textInput: {
    borderWidth: 1,
    paddingVertical: getSize.h(14),
    paddingHorizontal: getSize.w(16),
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: getSize.f(14),
    fontFamily: theme.fonts.NotoSansJP.regular,
    color: theme.colors.text,
    padding: 0,
  },
  iconRightContainer: {
    position: 'absolute',
    right: getSize.w(8),
  },
});
