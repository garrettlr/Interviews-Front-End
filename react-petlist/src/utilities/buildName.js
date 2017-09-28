const buildName = (first, last) => {
  const builtFirst = first[0].toUpperCase() + first.slice(1);
  const builtLast = last[0].toUpperCase();
  return `${builtFirst} ${builtLast}`;
}

export default buildName;
