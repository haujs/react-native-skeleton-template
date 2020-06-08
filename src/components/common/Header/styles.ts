import { StyleSheet } from 'react-native';
import theme from '@theme';
import { getSize } from '@utils/responsive';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.white,
    paddingBottom: getSize.h(15),
    alignItems: 'center',
  },
  logoImage: {
    width: getSize.w(170),
    height: getSize.h(24),
    alignSelf: 'center',
  },
  normalContainer: {
    backgroundColor: theme.colors.white,
    paddingBottom: getSize.h(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getSize.w(16),
    alignItems: 'center',
  },
  titleContainer: {
    flexGrow: 1,
    flex: 1,
    paddingHorizontal: getSize.w(15),
  },
  titleText: {
    textAlign: 'center',
    fontFamily: theme.fonts.NotoSansJP.medium,
    fontSize: getSize.f(17),
    height: getSize.h(20),
  },
  iconContainer: {
    width: getSize.h(40),
    height: getSize.h(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: theme.fonts.NotoSansJP.medium,
    fontSize: getSize.f(14),
    color: theme.colors.brightOrange,
  },
});
