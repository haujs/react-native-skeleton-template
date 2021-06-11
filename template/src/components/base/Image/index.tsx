import {useTheme} from '@theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {createDefaultStyle, handleGutter} from '../utils';
import {ImageProps} from './types';

const Image: React.FC<ImageProps> = props => {
  const {Colors} = useTheme();
  const {
    style,
    width,
    height,
    padding,
    margin,
    backgroundColor,
    ImageComponent = FastImage,
    ...rest
  } = props;

  const imageStyle = StyleSheet.flatten([
    createDefaultStyle(props),
    width && {width},
    height && {height},
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    backgroundColor && {
      backgroundColor: Colors[backgroundColor] || backgroundColor,
    },
    style,
  ]);

  return <ImageComponent {...rest} style={imageStyle} />;
};

export default Image;
