import {Block, Text} from '@components/base';
import {
  AlertButton,
  AlertType,
  closeAlert,
  dismissAlert,
} from '@store/actions-types/modal';
import Helper from '@utils/helpers';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Modal,
  ModalProps,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';

interface AlertProps extends ModalProps, AlertType {
  onBackdropPress?: () => void;
}

const alertTimingConfig = {
  easing: Easing.inOut(Easing.quad),
  duration: 100,
};

const Alert: React.FC<AlertProps> = props => {
  const {
    title,
    message,
    buttons,
    options,
    isVisible = false,
    onBackdropPress,
    override,
    ...rest
  } = props;

  const dispatch = useDispatch();

  const borderColor = useMemo(
    () => Helper.colorLuminance('#3C3C43', 0, 0.36),
    [],
  );

  const [isShow, setIsShow] = useState(false);

  const translateY = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      setIsShow(true);
      translateY.value = withTiming(1, alertTimingConfig);
    } else {
      translateY.value = withTiming(0, alertTimingConfig, () =>
        runOnJS(setIsShow)(false),
      );
    }
  }, [isVisible, translateY]);

  const contentContainerStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(
      translateY.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{scale: scaleValue}],
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [0, 1],
        [0, 0.4],
        Extrapolate.CLAMP,
      ),
    };
  });

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
            width: buttons && buttons.length === 2 && index === 1 ? 1 : 0,
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

  const _onDismiss = () => {
    if (override === false || (override && !isVisible)) {
      dispatch(dismissAlert());
    }
  };

  return (
    <Modal transparent onDismiss={_onDismiss} {...rest} visible={isShow}>
      <Block style={StyleSheet.absoluteFillObject}>
        <TouchableWithoutFeedback onPress={_onPressBackdrop}>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              styles.overlay,
              overlayStyle,
            ]}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          pointerEvents="box-none"
          style={[styles.contentContainer, contentContainerStyle]}>
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
            {buttons ? (
              <ScrollView bounces={false}>
                <Block row={buttons.length < 3}>
                  {buttons.map(_renderActions)}
                </Block>
              </ScrollView>
            ) : (
              _renderActions(
                {text: 'Cancel', onPress: () => dispatch(closeAlert())},
                0,
              )
            )}
          </Block>
        </Animated.View>
      </Block>
    </Modal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#000',
  },
  contentContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
  container: {maxHeight: '80%'},
});
