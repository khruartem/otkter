export const useSortAsc = <T>(
  array: T[],
  key: keyof T
) => {
  return [...array].sort((a, b) => {
    if (
      (a[key] !== null && b[key] !== null) ||
      (a[key] !== undefined && b[key] !== undefined)
    )
      return Number(a[key]) - Number(b[key]);
    else return 0;
  });
};
