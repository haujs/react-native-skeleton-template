import {Block, Text} from '@components/base';
import {BottomTabRoutes, RootStackRoutes} from '@navigation/types';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';

interface SearchProps {
  navigation: NavigationProp<RootStackRoutes>;
  route: RouteProp<BottomTabRoutes, 'Search'>;
}

const Search = ({}: SearchProps) => {
  return (
    <Block inset="top">
      <Text>Search</Text>
    </Block>
  );
};

export default Search;
