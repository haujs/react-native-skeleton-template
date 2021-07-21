import {Block, Text} from '@components/base';
import React from 'react';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Block flex backgroundColor="white" inset="top">
      <Text>• 大文字１文字以上</Text>
    </Block>
  );
};

export default HomeScreen;
