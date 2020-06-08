import React, { useState } from 'react';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import {
  Platform,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {
  hideBottomSheet,
  showBottomSheet,
} from '@components/common/BottomSheet/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getSize } from '@utils/responsive';
import useCustomTheme from '@hooks/useCustomTheme';
import theme from '@theme';
import { useTranslation } from './LocalizeProvider';

const OPTIONS = {
  quality: 1,
  maxHeight: 1000,
  maxWidth: 1000,
  noData: true,
};

export type CustomImageProps = { name?: string; uri?: string; type?: string };

type ItemType = {
  type: string;
  iconName: string;
  label: string;
};

interface ImagePickerResult {
  imageData: CustomImageProps;
  handleImagePick: () => void;
  setImageData: (e: CustomImageProps) => void;
}

const useImagePicker = (): ImagePickerResult => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { colors } = useCustomTheme();
  const [imageData, setImageData] = useState<CustomImageProps>({
    name: '',
    uri: '',
    type: '',
  });

  const handleResponse = (response: ImagePickerResponse) => {
    if (response.didCancel) {
      //console.log('User cancelled image picker');
    } else if (response.error) {
      //console.log('Error image picker');
    } else if (response.customButton) {
      //console.log('User tapped custom button:', response.customButton);
    } else {
      //response.fileSize > max_file_size
      setImageData({
        name: response.fileName || 'your-agent-photo',
        uri:
          Platform.OS === 'android'
            ? response.uri
            : response.uri.replace('file://', ''),
        type: response.type,
      });
    }

    dispatch(hideBottomSheet());
  };

  const chooseImage = (type: string) => {
    switch (type) {
      case 'TAKE_PHOTO':
        ImagePicker.launchCamera(OPTIONS, handleResponse);
        break;
      case 'CHOOSE_FROM_LIBRARY':
        ImagePicker.launchImageLibrary(OPTIONS, handleResponse);
        break;
      case 'REMOVE':
        setImageData({ name: '', uri: '', type: '' });
        dispatch(hideBottomSheet());
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }: { item: ItemType }) => {
    return (
      <TouchableOpacity onPress={() => chooseImage(item.type)}>
        <View style={styles.itemContainer}>
          <MaterialCommunityIcons
            name={item.iconName}
            size={getSize.f(20)}
            color={colors.black}
          />
          <Text style={styles.labelItem}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleImagePick = () => {
    let modalList = [
      {
        label: t('take_photo'),
        iconName: 'camera',
        type: 'TAKE_PHOTO',
      },
      {
        label: t('choose_from_library'),
        iconName: 'image-multiple',
        type: 'CHOOSE_FROM_LIBRARY',
      },
    ];

    let removeItem = {
      label: t('remove'),
      iconName: 'trash-can',
      type: 'REMOVE',
    };

    if (imageData.uri !== '') {
      modalList.push(removeItem);
    }

    dispatch(
      showBottomSheet({
        snapPoint: 250,
        modalStyle: styles.modalStyle,
        flatListProps: {
          data: modalList,
          renderItem,
          keyExtractor: (item: ItemType) => item.type,
        },
      }),
    );
  };

  return { imageData, setImageData, handleImagePick };
};

export default useImagePicker;

const styles = StyleSheet.create({
  modalStyle: {
    paddingVertical: getSize.h(15),
  },
  itemContainer: {
    paddingVertical: getSize.h(16),
    paddingHorizontal: getSize.h(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelItem: {
    fontFamily: theme.fonts.NotoSansJP.regular,
    marginLeft: getSize.w(8),
  },
});
