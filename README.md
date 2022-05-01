# Svelte Chakra (v0.1.0)

Svelte Chakra is an integration tool that allow Svelte developers to be able to use Chakra UI in their code.

## Table of Contents

- [Getting Started](#getting-started)
  - [Adding Svelte Chakra to project](#adding-svelte-chakra-to-project)
- [Adding to Page](#adding-to-a-page)
- [Accessing the theme](#accessing-the-theme-inline)
- [Creating Custom Components](#creating-custom-components)
- [List of Components](#list-of-components)
- [Modal Documentation](#modal-documentation)

## Getting Started

To add it to your Svelte project, just use:

```js
npm install svelte-chakra
```

## Adding to a Page

```js
import { Box } from "svelte-chakra";

<Box bg={theme.colors.black} color={theme.colors.white}>
```

## Accessing the theme (inline)

Adding `theme.xxx.xxx` to any props will access the corresponding theme variable inside of `theme.js`

```js
    <Box bg={theme.colors.black}>
```

### Distinctions:

`theme.color.red => default red color`
`theme.color.red[300] => red in the shade of 300`

## Creating Custom Components

Using `cssVariables` and `use:cssVariables` you can easily create custom components on the fly.

Inside of `../helpers` is a file called `cssVariables.js`, and to use it:

```js
<script>
    const { bg } = $$restProps;
    import { cssVariables } from '../helpers/cssVariables';
</script>

<div use:cssVariables={{bg}}> Some text goes here. </div>

<style>
    div {
        background-color: var(--bg);
    }
</style>
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
- [x] Modal
  - Props: none yet just `<ModalHeader>` and `<ModalFooter>` see [Modal Documentation](#modal-documention)

## Modal Documentation

`Coming Soon`
