import {useTheme} from '@theme';
import React, {Children} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Block from '../Block';
import Text from '../Text';
import {isString} from '../utils';
import {RadioGroupProps, RadioProps} from './types';

const Radio: React.FC<RadioProps> = props => {
  const {Colors} = useTheme();
  const {
    checked,
    onChange,
    disabled,
    children,
    color,
    containerStyle,
    type,
    position,
  } = props;

  const containerStyles = StyleSheet.flatten([
    styles.container,
    containerStyle,
    disabled && {opacity: 0.5},
  ]);

  const radioIcon = checked ? 'radio-button-checked' : 'radio-button-unchecked';
  const checkBoxIcon = checked ? 'check-box' : 'check-box-outline-blank';

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled}
      onPress={() => onChange && onChange(!checked)}
      style={containerStyles}>
      <Block row align="center" opacity={disabled ? 0.5 : 1}>
        {position !== 'right' && (
          <MaterialIcons
            name={type === 'checkbox' ? checkBoxIcon : radioIcon}
            size={21}
            color={color ? Colors[color] || color : Colors.primaryText}
          />
        )}
        {isString(children) ? (
          <Text
            padding={{left: 4}}
            color={color ? Colors[color] || color : Colors.primaryText}>
            {children}
          </Text>
        ) : (
          children
        )}
        {position === 'right' && (
          <MaterialIcons
            name={type === 'checkbox' ? checkBoxIcon : radioIcon}
            size={21}
            color={color ? Colors[color] || color : Colors.primaryText}
          />
        )}
      </Block>
    </TouchableOpacity>
  );
};

export default Radio;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});

export const RadioGroup = ({
  children,
  onSelected,
  selected,
  containerStyle,
}: RadioGroupProps) => {
  const _getChildren = () =>
    Children.map(children, child => {
      if (child.type?.name === 'Radio') {
        return React.createElement(Radio, {
          ...child.props,
          onChange: () => onSelected && onSelected(child.props.value),
          checked: selected === child.props.value,
        });
      } else {
        console.log('"Radio Group" just support "Radio" component');
        return;
      }
    });

  return <Block style={containerStyle}>{_getChildren()}</Block>;
};
