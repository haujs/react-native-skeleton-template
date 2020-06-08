import { StyleSheet } from 'react-native';
import { getSize } from '@utils/responsive';
import theme from '@theme';

export default StyleSheet.create({
  normalStyle: {
    paddingVertical: getSize.h(14),
    backgroundColor: theme.colors.primary,
  },
  linearGradient: {
    paddingVertical: getSize.h(14),
    borderRadius: 2,
  },
  touchableStyle: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.25,
    elevation: 3,
  },
});
