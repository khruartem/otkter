export const useSortDesc = <T>(array: T[], key: keyof T) => {
  return [...array].sort((a, b) => {
    if (
      (a[key] !== null && b[key] !== null) ||
      (a[key] !== undefined && b[key] !== undefined)
    )
      return Number(b[key]) - Number(a[key]);
    else return 0;
  });
};
