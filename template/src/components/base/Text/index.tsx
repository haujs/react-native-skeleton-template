import {useTheme} from '@theme';
import React, {Children} from 'react';
import {StyleSheet, Text as ReactNativeText} from 'react-native';
import {createDefaultStyle, handleGutter, isNumber, isString} from '../utils';
import {CommonTextProps} from './types';

const Text = (props: CommonTextProps) => {
  const {Fonts, Colors} = useTheme();

  const textStyle = (childProps: CommonTextProps) => {
    const {
      style,
      fontType = 'regular',
      color = 'primaryText',
      size = 14,
      lineHeight = size * 1.25,
      backgroundColor,
      padding,
      margin,
    } = childProps;

    return StyleSheet.flatten([
      createDefaultStyle(childProps),
      backgroundColor && {
        backgroundColor: Colors[backgroundColor] || backgroundColor,
      },
      Fonts[fontType],
      {color: Colors[color] || color},
      {fontSize: size},
      {lineHeight},
      childProps.center && {textAlign: 'center'},
      childProps.right && {textAlign: 'right'},
      childProps.justify && {textAlign: 'justify'},
      padding && handleGutter('padding', padding),
      margin && handleGutter('margin', margin),
      style,
    ]);
  };

  const _getChildren = (childrenProps: CommonTextProps) => {
    return Children.map(childrenProps.children, child => {
      if (!isNumber(child) && !child) {
        return;
      }

      if (!isString(child) && !isNumber(child)) {
        if (child.type.name === 'Text') {
          return (
            <ReactNativeText
              style={[textStyle({...childrenProps, ...child.props})]}>
              {_getChildren(child.props)}
            </ReactNativeText>
          );
        } else if (child.type.name === 'Icon') {
          return child;
        } else {
          console.log(`Component ${child.type.name} is not support`);
        }
      }
      return child;
    });
  };

  return (
    <ReactNativeText {...props} style={textStyle(props)}>
      {_getChildren(props)}
    </ReactNativeText>
  );
};

export default Text;
