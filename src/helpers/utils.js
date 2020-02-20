export const pluralize = (list = [], label, pluralLabel) => {
  const size = list.length;
  if (size === 0) {
    return `${size} ${pluralLabel}`;
  }
  if (size > 1) {
    return `${size} ${pluralLabel}`;
  }
  return `${size} ${label}`;
};
