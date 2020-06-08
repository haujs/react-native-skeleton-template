import { StyleSheet } from 'react-native';
import { getSize } from '@utils/responsive';
import theme from '@theme';

export default StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: getSize.f(14),
    fontFamily: theme.fonts.NotoSansJP.medium,
    color: theme.colors.text,
    marginBottom: getSize.h(8),
  },
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
  requireText: {
    fontSize: getSize.f(14),
    fontFamily: theme.fonts.NotoSansJP.medium,
    color: theme.colors.rouge,
  },
  iconRightContainer: {
    position: 'absolute',
    right: getSize.w(8),
  },
  errorText: {
    fontSize: getSize.f(10),
    fontFamily: theme.fonts.NotoSansJP.regular,
    color: theme.colors.rouge,
    marginTop: getSize.h(3),
  },
});
