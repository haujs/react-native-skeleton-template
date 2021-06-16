import {getIconComponent} from '@assets/icons';
import {useTheme} from '@theme';
import Helper from '@utils/helpers';
import {getSize} from '@utils/responsive';
import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import Block from '../Block';
import {IconComponentProps} from './types';

const Icon: React.FC<IconComponentProps> = props => {
  const {Colors} = useTheme();

  const {
    type,
    name,
    color = 'primaryText',
    iconProps,
    size,
    disabledStyle,
    style,
    backgroundColor,
    underlayColor = Helper.colorLuminance(backgroundColor || '#FFF', -0.1),
    ButtonComponent = props.onPress
      ? Platform.select<typeof React.Component>({
          android: TouchableNativeFeedback,
          default: TouchableHighlight,
        })
      : Block,
    ...rest
  } = props;

  const IconComponent = getIconComponent(type);

  const initContainerStyle = StyleSheet.flatten([
    styles.container,
    {backgroundColor},
    props.disabled && styles.disabledStyle,
    disabledStyle && disabledStyle,
    style,
  ]);

  return (
    <ButtonComponent
      {...{underlayColor}}
      {...rest}
      style={Platform.OS === 'android' ? {} : initContainerStyle}>
      <Block style={Platform.OS === 'android' ? initContainerStyle : {}}>
        <IconComponent
          {...iconProps}
          name={name}
          size={getSize.s(size || 0)}
          color={Colors[color] || color}
        />
      </Block>
    </ButtonComponent>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  disabledStyle: {opacity: 0.5},
});
