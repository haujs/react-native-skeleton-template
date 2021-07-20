import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  modalContainer: {
    width: '72%',
    borderRadius: getSize.s(10),
    backgroundColor: '#ffffff',
  },
});
