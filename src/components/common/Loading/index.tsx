import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicatorProps,
  ActivityIndicator,
  Animated,
  Easing,
  ViewStyle,
  StyleProp,
  ImageStyle,
} from 'react-native';
import { useCustomTheme } from '@hooks';
import { decor } from '@utils/images';
import styles from './styles';

interface LoadingProps extends ActivityIndicatorProps {
  isLoading: boolean;
  children?: JSX.Element;
  normalMode?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  logoStyles?: StyleProp<ImageStyle>;
}

const Loading: React.FC<LoadingProps> = ({
  isLoading,
  size,
  children,
  normalMode,
  containerStyles,
  logoStyles,
}) => {
  const { colors } = useCustomTheme();
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue, isLoading]);

  const spinImage = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (isLoading) {
    return (
      <View
        style={[
          children ? styles.containerFull : styles.minimizeContainer,
          containerStyles,
        ]}>
        {normalMode ? (
          <ActivityIndicator size={size} color={colors.primary} />
        ) : (
          <Animated.Image
            source={decor}
            style={[
              styles.loadingImage,
              logoStyles,
              { transform: [{ rotate: spinImage }] },
            ]}
          />
        )}
      </View>
    );
  }

  if (children) {
    return children;
  }

  return null;
};

export default Loading;
