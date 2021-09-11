import {Block, Text} from '@components/base';
import {BottomTabRoutes, RootStackRoutes} from '@navigation/types';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';

interface ProfileProps {
  navigation: NavigationProp<RootStackRoutes>;
  route: RouteProp<BottomTabRoutes, 'Profile'>;
}

const Profile = ({}: ProfileProps) => {
  return (
    <Block inset="top">
      <Text>Profile</Text>
    </Block>
  );
};

export default Profile;
