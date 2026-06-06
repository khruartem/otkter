export const useFinished = (dateStr: string): boolean => {
  const now = new Date();
  const finishDate = new Date(dateStr);

  const finished = now > finishDate ? true : false;

  return finished;
};
