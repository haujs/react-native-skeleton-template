import React from 'react';
import {Text, Block} from '@components/base';

const ExampleText = () => {
  return (
    <Block backgroundColor="white" flex padding={16}>
      <Text>Default text</Text>
      <Text size={16}>
        Text with font size: <Text fontType="bold">16</Text>
      </Text>
      <Text>
        Text with color:{' '}
        <Text fontType="bold" color="red">
          Red
        </Text>
      </Text>
    </Block>
  );
};

export default ExampleText;
