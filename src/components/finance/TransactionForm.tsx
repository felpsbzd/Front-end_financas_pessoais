import { useState } from "react";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

interface TransactionFormProps {
  onAddTransaction: (
    description: string,
    amount: number,
    type: "income" | "expense"
  ) => void;
}

export function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense"); // Padrão é despesa

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amount) return;

    onAddTransaction(description, Number(amount), type);

    // Limpar campos
    setDescription("");
    setAmount("");
  };

  return (
    <Card>
      <h3
        style={{ marginBottom: "1rem", color: "var(--color-text-secondary)" }}
      >
        Nova Movimentação
      </h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Input
          placeholder="Descrição (ex: Conta de Luz)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div style={{ display: "flex", gap: "1rem" }}>
          <Input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ flex: 1 }}
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value as "income" | "expense")}
            style={{
              padding: "0.75rem",
              borderRadius: "var(--radius)",
              border: "1px solid #334155",
              background: "var(--color-bg)",
              color: "white",
            }}
          >
            <option value="expense">Saída (Gasto)</option>
            <option value="income">Entrada (Ganho)</option>
          </select>
        </div>

        <Button type="submit">Adicionar Transação</Button>
      </form>
    </Card>
  );
}
