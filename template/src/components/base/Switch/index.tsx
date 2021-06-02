import {useTheme} from '@theme';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {clamp, snapPoint} from 'react-native-redash';
import {isString} from '../utils';
import styles from './styles';
import {SwitchProps} from './types';

const DEFAULT_TRACK_WIDTH = 50;
const DEFAULT_THUMB_WIDTH = 24;

const Switch: React.FC<SwitchProps> = props => {
  const {Colors} = useTheme();

  const {
    trackColor = {active: 'primary', inActive: '#ececec'},
    thumbColor = 'white',
    value,
    onValueChange,
    trackWidth = DEFAULT_TRACK_WIDTH,
    thumbWidth = DEFAULT_THUMB_WIDTH,
  } = props;

  const trackThumbWidth = useMemo(
    () => trackWidth - thumbWidth - 4,
    [trackWidth, thumbWidth],
  );

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withSpring(value ? trackThumbWidth : 0, {
      overshootClamping: true,
    });
  }, [trackThumbWidth, translateX, value]);

  const trackInActive = useMemo(
    () =>
      isString(trackColor)
        ? Colors[trackColor] || trackColor
        : Colors[trackColor.inActive] || trackColor.inActive,
    [Colors, trackColor],
  );
  const trackActive = useMemo(
    () =>
      isString(trackColor)
        ? Colors[trackColor] || trackColor
        : Colors[trackColor.active] || trackColor.active,
    [Colors, trackColor],
  );

  const circleInActive = useMemo(
    () =>
      isString(thumbColor)
        ? Colors[thumbColor] || thumbColor
        : Colors[thumbColor.inActive] || thumbColor.inActive,
    [Colors, thumbColor],
  );
  const circleActive = useMemo(
    () =>
      isString(thumbColor)
        ? Colors[thumbColor] || thumbColor
        : Colors[thumbColor.active] || thumbColor.active,
    [Colors, thumbColor],
  );

  const animSwitchContainter = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, trackThumbWidth],
        [trackInActive, trackActive],
      ),
    };
  });

  const animSwitchCircle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
      backgroundColor: interpolateColor(
        translateX.value,
        [0, trackThumbWidth],
        [circleInActive, circleActive],
      ),
      width: interpolate(
        translateX.value,
        [0, trackThumbWidth / 3, trackThumbWidth],
        [thumbWidth, (thumbWidth / 2) * 2.5, thumbWidth],
      ),
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number}
  >({
    onStart: (_e, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({translationX}, ctx) => {
      translateX.value = clamp(translationX + ctx.x, 0, trackThumbWidth);
    },
    onEnd: ({velocityX}) => {
      const selectedSnapPoint = snapPoint(translateX.value, velocityX, [
        0,
        trackThumbWidth,
      ]);
      translateX.value = withSpring(selectedSnapPoint, {
        overshootClamping: true,
      });
      runOnJS(onValueChange)(selectedSnapPoint !== 0);
    },
  });

  const _handleStateChange = useCallback(
    ({nativeEvent: {state}}: TapGestureHandlerStateChangeEvent) => {
      if (state !== State.ACTIVE) {
        return;
      }
      onValueChange(!value);
    },
    [onValueChange, value],
  );

  const panRef = useRef<PanGestureHandler>(null);

  return (
    <TapGestureHandler
      waitFor={panRef}
      onHandlerStateChange={_handleStateChange}>
      <Animated.View
        style={[
          styles.switchContainer,
          {width: trackWidth},
          animSwitchContainter,
        ]}>
        <PanGestureHandler ref={panRef} onGestureEvent={onGestureEvent}>
          <Animated.View
            style={[
              {width: thumbWidth, height: thumbWidth, borderRadius: thumbWidth},
              animSwitchCircle,
            ]}
          />
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default Switch;
