import React from 'react';
import {FastImageProps} from 'react-native-fast-image';
import {DefaultStyleProps} from '../utils';

export interface ImageProps extends FastImageProps, DefaultStyleProps {
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  ImageComponent?: React.ComponentType<any>;
}
