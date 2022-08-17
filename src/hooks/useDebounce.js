import { useEffect, useState } from "react";

const useDebounce = (val, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(val);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [val, delay]);

  return debouncedValue;
};

export default useDebounce;
