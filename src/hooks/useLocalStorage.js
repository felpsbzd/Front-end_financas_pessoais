import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // 1. Inicialização Lazy: Lê o localStorage apenas na primeira renderização
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Se existir, converte de JSON para Objeto. Se não, usa o valor inicial.
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Erro ao ler do localStorage:", error);
      return initialValue;
    }
  });

  // 2. Sincronização: Toda vez que o estado muda, salva no localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}