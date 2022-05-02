<script>
  var { colorScheme, size, variant, bgColor } = $$restProps;
  import { cssVariables } from "../helpers/cssVariables";
</script>

<span
  class={`chakra-badge ${variant}`}
  use:cssVariables={{
    colorScheme,
    size,
    variant,
    bgColor,
  }}
>
  <slot />
</span>

<style>
  span {
    background-color: var(--colorScheme);
    display: inline-block;
    padding-inline-end: 0.25rem;
    padding-inline-start: 0.25rem;
    font-size: 0.75rem;
    border-radius: 0.125rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
  }

  .chakra-badge.outline {
    border: 1px solid var(--colorScheme);
    background: white;
    color: var(--colorScheme);
  }

  .chakra-badge.subtle {
    border: 1px solid var(--colorScheme);
    background: 1px solid var(--colorScheme);
    color: hsl(var(--colorScheme), calc(var(--colorScheme) -10%));
  }
</style>
