import { useEffect, useRef } from "react";

type Timer = ReturnType<typeof setTimeout>;
type CallbackFn = (...args: any[]) => void;

export function useDebounce<Callback extends CallbackFn>(
  callback: Callback,
  delay = 1000,
) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  return ((...args) => {
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as Callback;
}
