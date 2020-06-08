import { StyleSheet } from 'react-native';
import theme from '@theme/index';
import { getSize } from '@utils/responsive';

export default StyleSheet.create({
  container: {
    marginTop: getSize.h(40),
  },
  mainContent: {
    backgroundColor: theme.colors.white,
    borderTopColor: theme.colors.brightOrange,
    borderTopWidth: getSize.h(4),
    paddingHorizontal: getSize.w(16),
    paddingTop: getSize.h(64),
    paddingBottom: getSize.h(32),
  },
  imgContainer: {
    height: getSize.h(80),
    width: getSize.h(80),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    marginHorizontal: getSize.w(8),
  },
  logoContainer: {
    alignSelf: 'center',
    position: 'absolute',
    top: getSize.h(-40),
  },
  shadowStyle: {
    position: 'absolute',
    bottom: getSize.h(-4),
    height: getSize.h(8),
    backgroundColor: theme.colors.lightGrey,
    width: '100%',
    borderRadius: getSize.h(4),
  },
  errorText: {
    fontFamily: theme.fonts.NotoSansJP.regular,
    color: theme.colors.rouge,
    fontSize: getSize.f(12),
  },
  errorContainer: {
    backgroundColor: theme.colors.veryLightPink,
    paddingVertical: getSize.h(15),
    paddingHorizontal: getSize.w(15),
    alignItems: 'center',
  },
});
