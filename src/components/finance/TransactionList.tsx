import type { Transaction } from "../../hooks/useTransactions";
import { TransactionItem } from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export function TransactionList({
  transactions,
  onRemove,
  onToggle,
}: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "var(--color-text-secondary)",
          marginTop: "2rem",
        }}
      >
        <p>Nenhuma transação cadastrada ainda.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "1.5rem" }}>
      {transactions.map((t) => (
        <TransactionItem
          key={t.id}
          transaction={t}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
