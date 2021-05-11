---
id: textinput
title: TextInput
---

A foundational component for inputting text into the app via a keyboard

## Usage

<img src="/example/input/input1.jpg" alt="Example" />

```jsx
import { Text } from '@components/base';

<TextInput placeholder="Input without label" />

<TextInput label="Input with label" placeholder="Placeholder" />

<TextInput
  label="Email"
  required
  placeholder="Input with icon"
  leftIcon={{type: 'materialCommunityIcons', name: 'mail'}}
  rightIcon={{type: 'materialCommunityIcons', name: 'home'}}
/>

<TextInput label="Password" placeholder="Password" secureTextEntry />

<TextInput
  label="Label"
  showError
  error="Error message"
  placeholder="Input with error message"
  leftIcon={{type: 'materialCommunityIcons', name: 'mail'}}
/>
```

## Props

Inherits [TextInput Props](https://reactnative.dev/docs/textinput#props).

---

### `fontType`

Specifies font weight. 

| Type   |               value      | Required | Default  |
| ------ | ------------------------ | -------- | -------- |
| string | enum('regular', 'bold')  |  No      | regular  |

---