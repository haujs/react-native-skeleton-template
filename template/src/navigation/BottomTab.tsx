import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomTabScreens} from './routes';
import {BottomTabRoutes, ScreenOptions} from './types';
import {CustomIcon} from '@assets/icons';

const Tab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigation = () => {
  const screenOptions: ScreenOptions<
    BottomTabRoutes,
    BottomTabNavigationOptions
  > = {
    Home: {
      tabBarLabel: 'Home',
      tabBarIcon: ({color}) => (
        <CustomIcon name="home" size={24} color={color} />
      ),
      tabBarShowLabel: false,
    },
    Search: {
      tabBarLabel: 'Search',
      tabBarIcon: ({color}) => (
        <CustomIcon name="search" size={24} color={color} />
      ),
      tabBarShowLabel: false,
    },
    Notification: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({color}) => (
        <CustomIcon name="bell" size={24} color={color} />
      ),
      tabBarShowLabel: false,
    },
    Profile: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({color}) => (
        <CustomIcon name="chart" size={24} color={color} />
      ),
      tabBarShowLabel: false,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        headerShown: false,
      }}>
      {bottomTabScreens.map(({name, component}: any) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={screenOptions[name]}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
