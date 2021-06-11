import {Block, Text} from '@components/base';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  Modal,
  ModalProps,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextStyle,
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

interface ActionSheetButton {
  text: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
}

const DEVICE_HEIGHT = Dimensions.get('window').height;

interface ActionSheetProps extends ModalProps {
  isVisible: boolean;
  onBackdropPress?: () => void;
  headerTitle?: string;
  buttons?: ActionSheetButton[];
  onPressCancel?: () => void;
  cancelText?: string;
  cancelTextStyle?: StyleProp<TextStyle>;
  CustomContentComponent?: React.ReactNode;
}

const actionSheetTimingConfig = {
  easing: Easing.inOut(Easing.quad),
  duration: 250,
};

const ActionSheet: React.FC<ActionSheetProps> = props => {
  const {t} = useTranslation();
  const {
    buttons,
    headerTitle,
    isVisible,
    onBackdropPress,
    onPressCancel,
    cancelTextStyle,
    cancelText,
    children,
    ...rest
  } = props;

  const [isShow, setIsShow] = useState(false);

  const translateY = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      setIsShow(true);
      translateY.value = withTiming(1, actionSheetTimingConfig);
    } else {
      translateY.value = withTiming(0, actionSheetTimingConfig, () =>
        runOnJS(setIsShow)(false),
      );
    }
  }, [isVisible, translateY]);

  const contentContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [0, 1],
            [DEVICE_HEIGHT, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
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

  const _renderActions = (item: ActionSheetButton, index: number) => {
    return (
      <Block
        key={index}
        border={{
          top: {
            width: 1,
            color: '#3c3c435c',
          },
        }}>
        <TouchableOpacity activeOpacity={0.8} onPress={item.onPress}>
          <Block padding={16}>
            <Text
              fontType="bold"
              size={18}
              center
              color="#0A7AFF"
              style={item.textStyle}>
              {item.text}
            </Text>
          </Block>
        </TouchableOpacity>
      </Block>
    );
  };

  const _onPressBackdrop = () => {
    if (onBackdropPress) {
      return onBackdropPress();
    }
    onPressCancel && onPressCancel();
  };

  return (
    <Modal {...rest} transparent visible={isShow}>
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
          style={[styles.container, contentContainerStyle]}>
          <Block
            inset="bottom"
            padding={{bottom: 16}}
            style={styles.contentContainer}>
            {children ? (
              children
            ) : (
              <ScrollView bounces={false} style={styles.scrollView}>
                {headerTitle && (
                  <Text
                    padding={14}
                    center
                    size={13}
                    fontType="bold"
                    color="#8F8F8F">
                    {headerTitle}
                  </Text>
                )}
                {buttons && <Block>{buttons.map(_renderActions)}</Block>}
              </ScrollView>
            )}
            <Block margin={{top: 8}}>
              <TouchableOpacity activeOpacity={0.8} onPress={onPressCancel}>
                <Block backgroundColor="#F2F2F2" radius={14} padding={16}>
                  <Text
                    fontType="bold"
                    size={18}
                    center
                    color="#0A7AFF"
                    style={cancelTextStyle}>
                    {cancelText || t('general.cancel')}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </Animated.View>
      </Block>
    </Modal>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#000',
  },
  container: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
  contentContainer: {
    maxHeight: '85%',
    width: '95%',
  },
  scrollView: {
    borderRadius: 14,
    backgroundColor: '#edededcc',
  },
});
