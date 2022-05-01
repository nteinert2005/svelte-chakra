export function cssVariables(node, variables) {
  setCssVariables(node, variables);

  return {
    update(variables) {
      setCssVariables(node, variables);
    },
  };
}

export function setCssVariables(node, variables) {
  for (const name in variables) {
    if (
      name === "bg" ||
      name === "colorScheme" ||
      name === "progressColor" ||
      name === "trackColor"
    ) {
      if (typeof variables[name] === "object") {
        variables[name] = variables[name].default;
      }
    }
    node.style.setProperty(`--${name}`, variables[name]);
  }
}
