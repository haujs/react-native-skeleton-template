import { StyleSheet } from 'react-native';
import { getSize } from '@utils/responsive';
import theme from '@theme';

export default StyleSheet.create({
  errorText: {
    fontSize: getSize.f(10),
    fontFamily: theme.fonts.NotoSansJP.regular,
    color: theme.colors.rouge,
    marginTop: getSize.h(3),
  },
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
  requireText: {
    fontSize: getSize.f(14),
    fontFamily: theme.fonts.NotoSansJP.medium,
    color: theme.colors.rouge,
  },
});
