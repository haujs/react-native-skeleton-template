import {createStackNavigator} from '@react-navigation/stack';
import {
  ExampleButton,
  ExampleIcon,
  ExampleInput,
  ExampleModal,
  ExampleRadio,
  ExampleScreen,
  ExampleSelect,
  ExampleText,
  ExampleSwitch,
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
      <ExampleStack.Screen name="ExampleRadio" component={ExampleRadio} />
      <ExampleStack.Screen name="ExampleModal" component={ExampleModal} />
      <ExampleStack.Screen name="ExampleSelect" component={ExampleSelect} />
      <ExampleStack.Screen name="ExampleSwitch" component={ExampleSwitch} />
    </ExampleStack.Navigator>
  );
};

export default ExampleNavigation;
