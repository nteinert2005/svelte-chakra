<script>
  const {
    bg,
    w,
    p,
    color,
    mt,
    mb,
    ml,
    mr,
    maxW,
    borderRadius,
    overflow,
    alignItems,
    justifyContent,
    display,
  } = $$restProps;
  import { cssVariables } from "../helpers/cssVariables";
</script>

<div
  use:cssVariables={{
    bg,
    w,
    p,
    color,
    maxW,
    mt,
    mb,
    ml,
    mr,
    borderRadius,
    overflow,
    alignItems,
    justifyContent,
    display,
  }}
>
  <slot />
</div>

<style>
  div {
    background-color: var(--bg);
    width: var(--w);
    max-width: var(--maxW);
    padding: var(--p);
    color: var(--color);
    border-radius: var(--borderRadius);
    overflow: var(--overflow);
    align-items: var(--alignItems);
    justify-content: var(--justifyContent);
    display: var(--display);
    margin-top: var(--mt);
    margin-bottom: var(--mb);
    margin-right: var(--mr);
    margin-left: var(--ml);
  }
</style>
