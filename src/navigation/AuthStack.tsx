import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '@screens/Auth';
import { START_SCREEN, LOGIN_SCREEN, SIGN_UP_SCREEN } from './ScreenName';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={START_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={START_SCREEN} component={Auth.StartScreen} />
      <Stack.Screen name={LOGIN_SCREEN} component={Auth.LoginScreen} />
      <Stack.Screen name={SIGN_UP_SCREEN} component={Auth.SignUpScreen} />
    </Stack.Navigator>
  );
}
