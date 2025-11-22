import { useState, useEffect } from "react";

// <T> significa que esse hook aceita "Qualquer Tipo" de dado (seja lista de finanças, tema, etc)
export function useLocalStorage<T>(key: string, initialValue: T) {
  // 1. Na inicialização, tentamos ler do LocalStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 2. Sempre que o estado mudar, salvamos no LocalStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
