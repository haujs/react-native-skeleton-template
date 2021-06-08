import {Alert, BottomMenu} from '@components/base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {startupRequest} from '@store/actions-types/startup';
import {getStartUpLoading} from '@store/selectors';
import {getAlertState, getBottomMenuState} from '@store/selectors/modal';
import {useTheme} from '@theme';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import ExampleNavigation from './ExampleNavigation';
import {navigationRef} from './NavigationServices';

const RootStack = createStackNavigator();

const MainNavigation = () => {
  const {NavigationTheme} = useTheme();
  const dispatch = useDispatch();
  const isLoading = useSelector(getStartUpLoading);
  const bottomMenuProps = useSelector(getBottomMenuState);
  const alertProps = useSelector(getAlertState);

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
        <RootStack.Screen name="Example" component={ExampleNavigation} />
      </RootStack.Navigator>
      <Alert {...alertProps} />
      <BottomMenu {...bottomMenuProps} />
    </NavigationContainer>
  );
};

export default MainNavigation;
