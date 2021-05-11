---
id: block
title: Block
---
**Block** is a container that supports layout. Like [View](https://reactnative.dev/docs/view) in React Native with more props

## Usage
```jsx
import { Block, Text } from '@components/base';

<Block
  inset="top"
  flexGrow
  backgroundColor="white"
  padding={{horizontal: 16}}
>
  <Text>Hello world</Text>
</Block>
```

## Props

Inherits [Default Style Props](../props/common#defaultstyleprops) and [View Props](https://reactnative.dev/docs/view#props).

---
### `inset`

Render content within the safe area boundaries of a device

| Type   |               value                                                                 | Required |
| ------ | ----------------------------------------------------------------------------------- | -------- |
| string | enum('top', 'bottom', 'right', 'left') or enum('top', 'bottom', 'right', 'left')[]  |  No      |

---
### `width`

Width of the component

| Type           | Required |
| -------------- | -------- |
| number, string |  No      |

---

### `height`

Height of the component

| Type           | Required |
| -------------- | -------- |
| number, string |  No      |

---

### `row`

The flexible items are displayed horizontally, as a row

| Type    | Required |
| ------- | -------- |
| boolean | No       |

---

### `backgroundColor`

Background color of the component - (key of **Colors (theme/colors.ts)** or **Color keywords**)

| Type    | Required |
| ------- | -------- |
| string  | No       |

---

### `align`

Describes how to align children along the cross axis of their container

| Type    |                                Value                                  | Required |
| ------- | --------------------------------------------------------------------- | -------- |
| string  | enum('flex-start','flex-end','center','stretch','baseline')           | No       |

---

### `justify`

Describes how to align children within the main axis of their container

| Type    |                                Value                                                   | Required |
| ------- | -------------------------------------------------------------------------------------- | -------- |
| string  | enum('flex-start','flex-end','center','space-between','space-around','space-evenly')   | No       |

---

### `position`

**Position** in React Native is similar to regular CSS

| Type    |             Value             | Required |
| ------- | ----------------------------- | -------- |
| string  | enum('absolute','relative')   | No       |

---

### `top`

**top** is the number of logical pixels to offset the top edge of this component.

| Type            | Required |
| --------------  | -------- |
| number, string  | No       |

---

### `left`

**left** is the number of logical pixels to offset the left edge of this component.

| Type            | Required |
| --------------  | -------- |
| number, string  | No       |

---

### `right`

**right** is the number of logical pixels to offset the right edge of this component.

| Type            | Required |
| --------------  | -------- |
| number, string  | No       |

---

### `bottom`

**bottom** is the number of logical pixels to offset the bottom edge of this component.

| Type            | Required |
| --------------  | -------- |
| number, string  | No       |

---

### `shadow`

Enable default shadow style of component

| Type     | Required |
| -------  | -------- |
| boolean  | No       |

---

### `radius`

Rounded border

| Type     | Required |
| -------  | -------- |
| number   | No       |

---