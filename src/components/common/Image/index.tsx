import React, { useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { placeholderImage } from '@utils/images';
import { getSize } from '@utils/responsive';
import { StyleSheet } from 'react-native';

const ImageView: React.FC<FastImageProps> = ({ source, style, ...props }) => {
  const [isError, setIsError] = useState(false);

  return (
    <FastImage
      onError={() => setIsError(true)}
      source={isError ? placeholderImage : source}
      style={style ? style : styles.defaultStyle}
      {...props}
    />
  );
};

export default ImageView;

const styles = StyleSheet.create({
  defaultStyle: { width: getSize.h(40), height: getSize.h(40) },
});
