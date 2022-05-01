<script>
  import Slider from "@bulatdashiev/svelte-slider";
  const {
    trackColor,
    progressColor,
    // isDisabled,
    // isFullWidth,
    width,
    min,
    max,
    // size,
    defaultValue,
  } = $$restProps;
  import { cssVariables } from "./helpers/cssVariables";
  let value = defaultValue || [50];
</script>

<div
  style={`width: ${width}`}
  use:cssVariables={{
    trackColor,
    progressColor,
    // isDisabled,
    // isFullWidth,
    min,
    max,
    // size,
    defaultValue,
  }}
>
  <Slider {max} {min} bind:value />
</div>

<style>
  div {
    --progress-bg: var(--progressColor);
    --track-bg: var(--trackColor);
  }
</style>
