import {createStackNavigator} from '@react-navigation/stack';
import {
  ExampleButton,
  ExampleIcon,
  ExampleInput,
  ExampleScreen,
  ExampleText,
} from '@screens/Example';

const ExampleStack = createStackNavigator();

import React from 'react';

const ExampleNavigation = () => {
  return (
    <ExampleStack.Navigator>
      <ExampleStack.Screen name="Example" component={ExampleScreen} />
      <ExampleStack.Screen name="ExampleText" component={ExampleText} />
      <ExampleStack.Screen name="ExampleButton" component={ExampleButton} />
      <ExampleStack.Screen name="ExampleIcon" component={ExampleIcon} />
      <ExampleStack.Screen name="ExampleInput" component={ExampleInput} />
    </ExampleStack.Navigator>
  );
};

export default ExampleNavigation;
