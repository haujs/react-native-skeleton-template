import {Block, Text} from '@components/base';
import {
  AlertButton,
  AlertPayload,
  closeAlert,
} from '@store/actions-types/modal';
import Helper from '@utils/helpers';
import React, {useMemo} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';

interface AlertProps extends AlertPayload {
  onBackdropPress?: () => void;
}

const Alert: React.FC<AlertProps> = props => {
  const {title, message, buttons, options, onBackdropPress} = props;

  const dispatch = useDispatch();

  const borderColor = useMemo(
    () => Helper.colorLuminance('#3C3C43', 0, 0.36),
    [],
  );

  const _renderActions = (item: AlertButton, index: number) => {
    return (
      <Block
        flexGrow
        key={index}
        border={{
          top: {
            width: 1,
            color: borderColor,
          },
          left: {
            width: buttons && buttons.length === 2 ? 1 : 0,
            color: borderColor,
          },
        }}>
        <TouchableOpacity onPress={item.onPress}>
          <Text
            size={16}
            padding={12}
            center
            color="#0A7AFF"
            style={item.textStyle}>
            {item.text}
          </Text>
        </TouchableOpacity>
      </Block>
    );
  };

  const _onPressBackdrop = () => {
    if (options && options.cancelable) {
      if (onBackdropPress) {
        return onBackdropPress();
      }
      dispatch(closeAlert());
    }
  };

  return (
    <Block
      style={StyleSheet.absoluteFillObject}
      justify="center"
      align="center">
      <TouchableWithoutFeedback onPress={_onPressBackdrop}>
        <Block style={[StyleSheet.absoluteFillObject, styles.overlay]} />
      </TouchableWithoutFeedback>
      <Block
        width="78%"
        style={styles.container}
        backgroundColor="#F2F2F2"
        radius={14}>
        <Block padding={{horizontal: 16, vertical: 19}}>
          <Text fontType="bold" size={15} center>
            {title}
          </Text>
          {message && (
            <Text center margin={{top: 2}}>
              {message}
            </Text>
          )}
        </Block>
        {buttons && (
          <ScrollView bounces={false}>
            <Block row={buttons.length < 3}>
              {buttons.map(_renderActions)}
            </Block>
          </ScrollView>
        )}
      </Block>
    </Block>
  );
};

export default Alert;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#000',
    opacity: 0.4,
  },
  container: {maxHeight: '80%'},
});
