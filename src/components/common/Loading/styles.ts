import { StyleSheet } from 'react-native';
import { getSize } from '@utils/responsive';

export default StyleSheet.create({
  containerFull: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minimizeContainer: {
    paddingVertical: getSize.h(10),
    alignItems: 'center',
  },
  loadingImage: {
    width: getSize.h(60),
    height: getSize.h(60),
  },
});
