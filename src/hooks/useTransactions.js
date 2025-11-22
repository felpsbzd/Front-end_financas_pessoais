import { useLocalStorage } from "./useLocalStorage";

export function useTransactions() {
  // Usa o hook que criamos acima para gerenciar a lista 'transactions'
  const [transactions, setTransactions] = useLocalStorage("fintech:transactions", []);

  // Adicionar (Create)
  const addTransaction = (transactionData) => {
    const newTransaction = {
      id: Date.now(), // ID único baseado no tempo
      description: transactionData.description,
      amount: parseFloat(transactionData.amount),
      type: transactionData.type, // 'income' (entrada) ou 'expense' (saída)
      date: new Date().toISOString(),
      status: 'pending' // pending (pendente) | paid (pago)
    };

    // Adiciona o novo item no INÍCIO da lista
    setTransactions([newTransaction, ...transactions]);
  };

  // Remover (Delete) - Requisito: Remover tarefa [cite: 13, 82]
  const removeTransaction = (id) => {
    const filtered = transactions.filter((t) => t.id !== id);
    setTransactions(filtered);
  };

  // Alterar Status - Requisito: Marcar como concluída [cite: 64, 80]
  const toggleStatus = (id) => {
    const updated = transactions.map((t) => 
      t.id === id 
        ? { ...t, status: t.status === 'paid' ? 'pending' : 'paid' }
        : t
    );
    setTransactions(updated);
  };

  // Cálculo Automático de Resumo (Entradas - Saídas)
  const summary = transactions.reduce(
    (acc, transaction) => {
      // Só soma se estiver marcado como 'paid' (Pago)? 
      // Para simplificar o MVP, vamos somar tudo, ou você prefere somar só os pagos?
      // Por enquanto, somamos tudo para previsão financeira.
      if (transaction.type === 'income') {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.expense += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { income: 0, expense: 0, total: 0 }
  );

  return {
    transactions,
    addTransaction,
    removeTransaction,
    toggleStatus,
    summary
  };
}