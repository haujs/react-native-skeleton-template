import {useTheme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  createDefaultStyle,
  handleGutter,
  handleInset,
  isNumber,
} from '../utils';
import {BlockProps} from './types';

const Block = React.forwardRef<any, BlockProps>((props, ref) => {
  const {Colors} = useTheme();
  const safeArea = useSafeAreaInsets();

  const {
    children,
    style,
    width,
    height,
    backgroundColor,
    align,
    justify,
    row,
    position,
    top,
    bottom,
    left,
    right,
    padding,
    margin,
    shadow,
    overflow,
    ...rest
  } = props;

  const blockStyles = StyleSheet.flatten([
    createDefaultStyle(props),
    width && {width: isNumber(width) ? getSize.s(width) : width},
    height && {height: isNumber(height) ? getSize.s(height) : height},
    backgroundColor && {
      backgroundColor: Colors[backgroundColor] || backgroundColor,
    },
    align && {alignItems: align},
    justify && {justifyContent: justify},
    row && {flexDirection: 'row'},
    position && {position},
    {top: isNumber(top) ? getSize.s(top) : top},
    {bottom: isNumber(bottom) ? getSize.s(bottom) : bottom},
    {left: isNumber(left) ? getSize.s(left) : left},
    {right: isNumber(right) ? getSize.s(right) : right},
    overflow && {overflow},
    padding && handleGutter('padding', padding),
    margin && handleGutter('margin', margin),
    handleInset(props, safeArea, padding),
    shadow && {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    style,
  ]);

  return (
    <View {...rest} ref={ref} style={blockStyles}>
      {children}
    </View>
  );
});

export default Block;
