import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import ImageView from '@components/common/Image';
import { useNavigation } from '@react-navigation/native';
import { logo, decor } from '@utils/images';
import { Icon } from '@assets/icons';
import { getSize } from '@utils/responsive';
import { useSafeArea } from 'react-native-safe-area-context';
import { useCustomTheme } from '@hooks';
import {
  IHeader,
  HeaderIconType,
  HeaderImageType,
  HeaderTextType,
} from './types';

const Header: React.FC<IHeader> = ({
  title,
  mode,
  titleStyles,
  containerStyles,
  iconLeft,
  iconRight,
  textRight,
  textLeft,
  imageRight,
  imageLeft,
  goBack,
  goHome,
  removeSafeArea,
  headerRightOnPressed,
  headerLeftOnPressed,
}) => {
  const navigation = useNavigation();
  const inset = useSafeArea();
  const { colors } = useCustomTheme();

  const renderIcon = (icon: HeaderIconType) => (
    <Icon
      name={icon.name}
      size={icon.size || getSize.h(30)}
      color={icon.color || colors.black}
    />
  );

  const renderImage = (image: HeaderImageType) => (
    <ImageView
      source={image.source}
      resizeMode="contain"
      style={{
        width: image.width || getSize.h(30),
        height: image.height || getSize.h(30),
      }}
    />
  );

  const renderText = (text: HeaderTextType) => (
    <Text style={[styles.textStyle, text.style]} numberOfLines={1}>
      {text.content}
    </Text>
  );

  const handleLeftPress = () => {
    if (typeof headerLeftOnPressed === 'function') {
      headerLeftOnPressed();
    } else {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
  };

  const handleRightPress = () => {
    if (typeof headerRightOnPressed === 'function') {
      headerRightOnPressed();
    } else {
      if (navigation.canGoBack()) {
        (navigation as any).popToTop();
      }
    }
  };

  const renderLeftHeader = () => {
    let childItem = null;
    if (goBack) {
      childItem = renderIcon({ name: 'back' });
    }
    if (textLeft) {
      childItem = renderText(textLeft);
    }
    if (iconLeft) {
      childItem = renderIcon(iconLeft);
    }
    if (imageLeft) {
      childItem = renderImage(imageLeft);
    }
    if (childItem) {
      return (
        <TouchableOpacity onPress={handleLeftPress}>
          {childItem}
        </TouchableOpacity>
      );
    }
  };

  const renderRightArea = () => {
    let childItem = null;
    if (goHome) {
      childItem = renderImage({ source: decor });
    }

    if (textRight) {
      childItem = renderText(textRight);
    }

    if (iconRight) {
      childItem = renderIcon(iconRight);
    }

    if (imageRight) {
      childItem = renderImage(imageRight);
    }

    if (childItem) {
      return (
        <TouchableOpacity onPress={handleRightPress}>
          {childItem}
        </TouchableOpacity>
      );
    }
  };

  return (
    <View
      style={[
        styles.normalContainer,
        {
          paddingTop: removeSafeArea
            ? getSize.h(10)
            : inset.top + getSize.h(10),
        },
        containerStyles,
      ]}>
      <View style={styles.iconContainer}>{renderLeftHeader()}</View>
      <View style={styles.titleContainer}>
        {mode === 'main' ? (
          <ImageView source={logo} style={styles.logoImage} />
        ) : (
          <Text style={[styles.titleText, titleStyles]} numberOfLines={1}>
            {title}
          </Text>
        )}
      </View>
      <View style={styles.iconContainer}>{renderRightArea()}</View>
    </View>
  );
};

export default Header;
