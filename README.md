# Svelte Chakra (v0.0.2)

Svelte Chakra is an integration tool that allow Svelte developers to be able to use Chakra UI in their code.

## Table of Contents

- [Getting Started](#getting-started)
  - [Adding Svelte Chakra to project](#adding-svelte-chakra-to-project)
- [Accessing the theme](#accessing-the-theme-inline)
- [Adding to Page](#adding-to-a-page)
- [List of Components](#list-of-components)

## Getting Started

To add it to your Svelte project, just use:

```js
npm install svelte-chakra
```

## Accessing the theme (inline)

Adding `theme.xxx.xxx` to any props will access the corresponding theme variable inside of `theme.js`

```js
    <Box bg={theme.colors.black}>
```

## Adding to a Page

and then on the page that you want to use it:

```js
import { Box } from "svelte-chakra";

<Box bg={theme.colors.black} color={theme.colors.white}>
```

## List of Components (so far)

Here is a running list of the features that are done or in the works. Below each component is a list of all the available props you can use to customize it.

- [x] Box
  - Props: `bg, w, p, color, maxW, mt, mb, ml, mr, borderRadius, overflow, alignItems, justifyContent, display`
- [x] Container
  - Props: `bg, w, p, color, mt, mb, ml, mr, maxW, borderRadius, overflow, alignItems, justifyContent, display, centerContent `
- [x] Button
  - Props: `colorScheme, isDisabled, isFullWidth, fontColor, leftIcon, rightIcon, size `
- [x] Slider
  - Props: `trackColor, progressColor, width, min, max, defaultValue `
