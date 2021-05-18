import React from 'react';
import {Text, Block, TextInput} from '@components/base';

const ExampleInput = () => {
  return (
    <Block flex backgroundColor="white" padding={16}>
      <Block margin={{bottom: 16}}>
        <Text size={16} margin={{bottom: 12}} fontType="bold">
          Input Simple
        </Text>
        <TextInput placeholder="Place your Text" />
      </Block>
      <Block margin={{bottom: 16}}>
        <Text size={16} margin={{bottom: 12}} fontType="bold">
          Input with icon
        </Text>
        <TextInput
          placeholder="Place your Text"
          leftIcon={{type: 'octicons', name: 'home'}}
        />
      </Block>
      <Block margin={{bottom: 16}}>
        <Text size={16} margin={{bottom: 12}} fontType="bold">
          Input with right icon
        </Text>
        <TextInput
          placeholder="Place your Text"
          rightIcon={{type: 'octicons', name: 'home'}}
          onRightIconPress={() => console.log('onRightIconPress')}
        />
      </Block>
      <Block margin={{bottom: 16}}>
        <Text size={16} margin={{bottom: 12}} fontType="bold">
          Input password
        </Text>
        <TextInput placeholder="Place your Text" secureTextEntry />
      </Block>
    </Block>
  );
};

export default ExampleInput;
