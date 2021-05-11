import Helper from '@utils/helpers';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Block from '../Block';

interface IconProps {
  containerStyle: StyleProp<ViewStyle>;
  IconComponent: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}

const Icon: React.FC<IconProps> = ({
  containerStyle,
  IconComponent,
  onPress,
}) => {
  return (
    <Block justify="center" style={containerStyle}>
      <TouchableOpacity
        disabled={!onPress}
        hitSlop={Helper.getHitSlop(8)}
        activeOpacity={0.8}
        onPress={onPress}>
        {IconComponent}
      </TouchableOpacity>
    </Block>
  );
};

export default Icon;
