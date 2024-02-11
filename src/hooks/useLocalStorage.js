import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
