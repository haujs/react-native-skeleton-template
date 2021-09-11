import {Block, Text} from '@components/base';
import {RootStackRoutes, BottomTabRoutes} from '@navigation/types';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';

interface NotificationProps {
  navigation: NavigationProp<RootStackRoutes>;
  route: RouteProp<BottomTabRoutes, 'Notification'>;
}

const Notification = ({}: NotificationProps) => {
  return (
    <Block inset="top">
      <Text>Notification</Text>
    </Block>
  );
};

export default Notification;
