<script>
  const {
    colorScheme,
    isDisabled,
    isFullWidth,
    leftIcon,
    fontColor,
    rightIcon,
    size,
  } = $$restProps;
  import { cssVariables } from "./helpers/cssVariables";
  import { Icon } from "svelte-hero-icons";
</script>

<button
  disabled={isDisabled ? true : null}
  class={isFullWidth ? "full-width" : null}
  use:cssVariables={{
    colorScheme,
    isDisabled,
    isFullWidth,
    fontColor,
    leftIcon,
    rightIcon,
    size,
  }}
>
  {#if leftIcon}
    <Icon src={leftIcon} size="16" solid style="margin-right: 10px" />
  {/if}
  <slot />
  {#if rightIcon}
    <Icon src={rightIcon} size="16" solid style="margin-left: 10px" />
  {/if}
</button>

<style>
  button {
    background-color: var(--colorScheme);
    border: 1px solid var(--colorScheme);
    border-radius: 10px;
    line-height: 1.2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--fontColor);
    padding-inline-start: var(--size);
    padding-inline-end: var(--size);
    padding: 1em;
  }

  button.full-width {
    width: 100%;
  }
</style>
