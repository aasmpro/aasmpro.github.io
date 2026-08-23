import { useEffect, useRef } from "react";

export function useInterval(
  callback: () => void,
  delay: number | null,
): void {
  const savedCallback = useRef(callback);

  // Update the ref when callback changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
