import { useRef, useEffect } from "react";

type Timer = ReturnType<typeof setTimeout>;
type CallbackFn = (...args: unknown[]) => void;

export function useDebounce<Callback extends CallbackFn>(
  callback: Callback,
  delay = 1000
) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as Callback;

  return debouncedFunction;
}
