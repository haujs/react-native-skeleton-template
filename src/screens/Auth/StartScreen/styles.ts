import { StyleSheet } from 'react-native';
import theme from '@theme/index';
import { getSize } from '@utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: getSize.w(24),
  },
  logo: {
    width: getSize.w(282),
    height: getSize.h(46),
    alignSelf: 'center',
  },
  signInButton: {
    marginTop: getSize.h(40),
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 1,
  },
  signUpTitleText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.NotoSansJP.bold,
    fontSize: getSize.f(14),
    height: 17,
    marginVertical: getSize.h(12),
  },
  loginButton: {
    marginTop: getSize.h(40),
    width: getSize.w(82),
    alignSelf: 'center',
  },
  loginContainer: {
    backgroundColor: 'transparent',
  },
  loginTitleText: {
    color: theme.colors.brightOrange,
    fontFamily: theme.fonts.NotoSansJP.regular,
    fontSize: getSize.f(14),
  },
});
