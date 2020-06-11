import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isMountedRef } from './RootNavigation';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { AuthStack } from './AuthStack';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from '@hooks';
import env from 'react-native-config';

export type AuthType = {
  userInfo: object;
  isAuth: boolean;
};

const MainContainer = () => {
  const { setLocale } = useTranslation();

  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    isMountedRef.current = true;
    // @ts-ignore
    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    if (env.DEFAULT_LANG !== 'jp') {
      setLocale(env.DEFAULT_LANG);
    }
  }, [setLocale]);

  const typedUseSelector: TypedUseSelectorHook<{
    auth: AuthType;
  }> = useSelector;

  const { isAuth } = typedUseSelector((state) => state.auth);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.container}>{!isAuth && <AuthStack />}</View>
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
