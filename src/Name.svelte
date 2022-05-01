<script>
  let name = "Testing";
  const { fontSize, fontWeight, fontColor, lineHeight, fonts, letterSpacings } =
    $$restProps;
  import { cssVariables } from "./helpers/cssVariables";
</script>

<span
  use:cssVariables={{
    fontSize,
    fontWeight,
    fontColor,
    lineHeight,
    fonts,
    letterSpacings,
  }}
>
  {name}
</span>

<style>
  span {
    font-size: var(--fontSize);
    font-weight: var(--fontWeight);
    color: var(--fontColor);
    line-height: var(--lineHeight);
    font-family: var(--font);
    letter-spacing: var(--letterSpacings);
  }
</style>
