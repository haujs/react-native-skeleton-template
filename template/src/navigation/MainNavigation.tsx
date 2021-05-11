import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens';
import {startupRequest, StartupState} from '@store/actions-types/startup';
import {useTheme} from '@theme';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {navigationRef} from './NavigationServices';

const RootStack = createStackNavigator();

const MainNavigation = () => {
  const {NavigationTheme} = useTheme();
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: {startup: StartupState}) => state.startup.isLoading,
  );

  useEffect(() => {
    dispatch(startupRequest());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <StatusBar barStyle="dark-content" />
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Main" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
