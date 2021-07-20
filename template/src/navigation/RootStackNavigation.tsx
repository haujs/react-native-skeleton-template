import {Button} from '@components/base';
import {createStackNavigator} from '@react-navigation/stack';
import {DevMenu} from '@screens/DevMode';
import {getIsAuth} from '@store/selectors/userSelector';
import {Colors} from '@theme/colors';
import Helper from '@utils/helpers';
import {getSize} from '@utils/responsive';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import MainStackNavigation from './MainStackNavigation';
import {DevStackRoutes, RootStackRoutes} from './types';

const RootStack = createStackNavigator<RootStackRoutes>();

const RootStackNavigation = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <RootStack.Navigator
      headerMode="none"
      mode="modal"
      initialRouteName="MainStack">
      <RootStack.Screen name="MainStack" component={MainStackNavigation} />
      {!isAuth && getNotLoggedInStack()}
      <RootStack.Screen name="DevStack" component={DevStackNavigation} />
    </RootStack.Navigator>
  );
};

const getNotLoggedInStack = () => <></>;

export default RootStackNavigation;

const DevStack = createStackNavigator<DevStackRoutes>();
const DevStackNavigation = () => {
  return (
    <DevStack.Navigator
      initialRouteName="DevMenu"
      screenOptions={{
        headerShown: false,
        headerTitleAllowFontScaling: false,
        headerLeftContainerStyle: {paddingHorizontal: 16},
        headerLeft: ({onPress}) => (
          <Button padding={7} onPress={onPress} hitSlop={Helper.getHitSlop()}>
            <Ionicons
              name="chevron-back"
              color={Colors.pine}
              size={getSize.m(16)}
            />
          </Button>
        ),
      }}>
      <DevStack.Screen name="DevMenu" component={DevMenu} />
    </DevStack.Navigator>
  );
};
