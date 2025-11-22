import { useLocalStorage } from "./useLocalStorage";

// Definimos o formato de uma Transação
export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense"; // Entrada ou Saída
  isPaid: boolean; // Status: Pago ou Pendente
  date: string;
}

export function useTransactions() {
  // Usamos nosso hook customizado em vez de useState comum
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(
    "fintech-transactions",
    []
  );

  // 1. Adicionar Transação
  const addTransaction = (
    description: string,
    amount: number,
    type: "income" | "expense"
  ) => {
    const newTransaction: Transaction = {
      id: Date.now(), // Gera ID único baseado no tempo
      description,
      amount,
      type,
      isPaid: false, // Padrão começa como pendente
      date: new Date().toLocaleDateString("pt-BR"),
    };

    setTransactions([...transactions, newTransaction]);
  };

  // 2. Remover Transação
  const removeTransaction = (id: number) => {
    const filtered = transactions.filter((t) => t.id !== id);
    setTransactions(filtered);
  };

  // 3. Alternar Status (Pagar/Despagar)
  const toggleStatus = (id: number) => {
    const updated = transactions.map((t) =>
      t.id === id ? { ...t, isPaid: !t.isPaid } : t
    );
    setTransactions(updated);
  };

  return {
    transactions,
    addTransaction,
    removeTransaction,
    toggleStatus,
  };
}
