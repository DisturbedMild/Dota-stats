const convertTime = (time: number) => {
  let minutes = Math.floor(time / 60);
  let extraSeconds = time % 60;
  const minutesTime = minutes < 10 ? "0" + minutes : minutes;
  const extraSecondsTime =
    extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
  return {
    minutes: minutesTime,
    seconds: extraSecondsTime,
  };
};
export { convertTime };
