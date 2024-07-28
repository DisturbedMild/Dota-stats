export const calculatedTimeFromLastMatch = (time: number) => {
  const date = Date.now();
  const timesGone = (date - time * 1000) / (1000 * 60 * 60 * 24);
  return timesGone.toFixed(0)
}
