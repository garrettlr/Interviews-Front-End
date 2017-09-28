const buildName = (first, last) => {
  const builtFirst = first[0].toUpperCase() + first.slice(1);
  const builtLast = last[0].toUpperCase();
  // wrap in template literal to make clear that return value is a string.
  return `${builtFirst} ${builtLast}.`;
}

export default buildName;
