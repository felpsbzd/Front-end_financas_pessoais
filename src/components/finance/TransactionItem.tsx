import type { Transaction } from "../../hooks/useTransactions";
import { formatCurrency } from "../../utils/formater";
import { Card } from "../ui/Card";

interface TransactionItemProps {
  transaction: Transaction;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export function TransactionItem({
  transaction,
  onRemove,
  onToggle,
}: TransactionItemProps) {
  return (
    <Card
      className="transaction-item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderLeft: `4px solid ${
          transaction.type === "income"
            ? "var(--color-income)"
            : "var(--color-expense)"
        }`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          opacity: transaction.isPaid ? 0.5 : 1,
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            textDecoration: transaction.isPaid ? "line-through" : "none",
          }}
        >
          {transaction.description}
        </span>
        <span
          style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}
        >
          {formatCurrency(transaction.amount)} • {transaction.date}
        </span>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={() => onToggle(transaction.id)}
          style={{
            background: "transparent",
            border: "1px solid var(--color-primary)",
            color: "var(--color-primary)",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {transaction.isPaid ? "Desfazer" : "Pagar"}
        </button>

        <button
          onClick={() => onRemove(transaction.id)}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--color-expense)",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          &times;
        </button>
      </div>
    </Card>
  );
}
