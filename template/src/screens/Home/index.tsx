import {Block, Text, TextInput} from '@components/base';
import React from 'react';

const HomeScreen = () => {
  return (
    <Block
      inset="top"
      padding={{horizontal: 16}}
      flexGrow
      backgroundColor="white">
      <Text fontType="bold" size={18} color="blue">
        1. Font Type
      </Text>
      <Text fontType="regular">Regular</Text>
      <Text fontType="bold">Bold</Text>
      <Block height={16} />
      <TextInput
        label="Email"
        required
        showError
        error="Invalid Email"
        placeholder="Email"
        leftIcon={{type: 'materialCommunityIcons', name: 'mail'}}
        rightIcon={{type: 'materialCommunityIcons', name: 'home'}}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        leftIcon={{type: 'materialCommunityIcons', name: 'lock'}}
        secureTextEntry
      />
    </Block>
  );
};

export default HomeScreen;
