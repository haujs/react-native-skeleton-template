---
id: text
title: Text
---

**Text** is React component for displaying text. Like [Text](https://reactnative.dev/docs/text) in React Native

## Usage

<img src="/example/text/text1.jpg" alt="Example" />

```jsx
import { Text } from '@components/base';

<Text fontType="bold" size={18} margin={{bottom: 12}} color="blue">
    Hello <Text color="red">C2C</Text>
</Text>

<Text size={16}>Hello C2C</Text>
```

## Props

Inherits [Default Style Props](../props/common#defaultstyleprops) and [Text Props](https://reactnative.dev/docs/text#props).

---

### `fontType`

Specifies font weight. 

| Type   |               value      | Required | Default  |
| ------ | ------------------------ | -------- | -------- |
| string | enum('regular', 'bold')  |  No      | regular  |

---

### `color`

Color of text - key of **Colors (theme/colors.ts)** or **Color keywords**

| Type   | Required | Default     |
| ------ | -------- | ----------- |
| string |  No      | primaryText |

---

### `backgroundColor`

Background color of text - key of **Colors (theme/colors.ts)** or **Color keywords**

| Type   | Required |
| ------ | -------- |
| string |  No      |

---

### `center`

Specifies text alignment. textAlign: 'center'

| Type    | Required |
| ------- | -------- |
| boolean |  No      |

---

### `right`

Specifies text alignment. textAlign: 'right'

| Type    | Required |
| ------- | -------- |
| boolean |  No      |

---

### `jusitfy`

Specifies text alignment. textAlign: 'jusitfy'

| Type    | Required |
| ------- | -------- |
| boolean |  No      |

---

### `size`

Size of text

| Type    | Required | Default  |
| ------- | -------- | -------- |
| number  |  No      | 14       |

---

### `lineHeight`

Line height of text

| Type    | Required | Default                |
| ------- | -------- | ---------------------- |
| number  |  No      | [size](text#size) * 1.5|

---