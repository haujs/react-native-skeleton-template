---
id: common
title: Common
---
## DefaultStyleProps

---
### `flex`

Define how your items are going to **“fill”** over the available space along your main axis ([flex](https://reactnative.dev/docs/layout-props#flex))

| Type             | Required | Value                          |
| ---------------  | -------- | ------------------------------ |
| boolean, number  |  No      | boolean => flex: 1             |
|                  |          | **number** => flex: **number** |

---

### `flexGrow`

Describes how any space within a container should be distributed among its children along the main axis ([flexGrow](https://reactnative.dev/docs/layout-props#flexgrow))

| Type             | Required | Value                              |
| ---------------  | -------- | ---------------------------------- |
| boolean, number  |  No      | boolean => flexGrow: 1             |
|                  |          | **number** => flexGrow: **number** |

---

### `flexShrink`

Describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. ([flexShirnk](https://reactnative.dev/docs/layout-props#flexshrink))

| Type             | Required | Value                                |
| ---------------  | -------- | ------------------------------------ |
| boolean, number  |  No      | boolean => flexShrink: 1             |
|                  |          | **number** => flexShrink: **number** |

---

### `square`

Make component to square with value

| Type     | Required |
| -------  | -------- |
| number   | No       |

---

### `round`

Make component to circular with value

| Type     | Required |
| -------  | -------- |
| number   | No       |

---

### `radius`

Rounded border

| Type     | Required |
| -------  | -------- |
| number   | No       |

---

### `borderStyle`

Style of border

| Type     | Value                           | Required |
| -------  | ------------------------------- | -------- |
| number   | enum('solid','dotted','dashed') | No       |

---

### `opacity`

Set an opacity value for component. The number should be in the range from **0.0** to **1.0**.

| Type     | Required |
| -------  | -------- |
| number   | No       |

---

### `wrap`

Specifies that the flexible items will wrap if necessary

| Type    | Required |
| ------- | -------- |
| boolean | No       |

---

### `border`
**border** works like border-width in CSS

| Type    | Required |
| ------- | -------- |
| object  | No       |

```jsx
//Example props
//borderWidth = 1 and borderColor = black
border={{width: 1, color: 'black'}}
//or
//borderTopWidth = 1 and borderTopColor = black and borderLeftWidth = 1 and borderLeftColor = black
border={{top: {width: 1, color: 'black'}, left: {width: 1, color: 'black'}}}

//border: BorderProps | BorderType
type BorderType = {
  top?: BorderProps;
  left?: BorderProps;
  right?: BorderProps;
  bottom?: BorderProps;
};

type BorderProps = {width: number; color: string};

```

---

### `padding`

**Padding** creates extra space within an component

|     Type         | Required |
| ---------------- | -------- |
| number | object  | No       |

```jsx
//Example props
//padding = 16
padding={16}
//or
//paddingTop = 12 and paddingHorizontal = 16
padding={{horizontal: 16, top: 12}}

//padding: number | GutterProps
type GutterProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
};

```

---

### `margin`

**Margin** creates extra space around an component

|     Type         | Required |
| ---------------- | -------- |
| number | object  | No       |

```jsx
//Example props
//margin = 16
margin={16}
//or
//marginTop = 12 and marginHorizontal = 16
margin={{horizontal: 16, top: 12}}

//margin: number | GutterProps
type GutterProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
};

```

---