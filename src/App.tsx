import "./styles/global.css";
import { useTransactions } from "./hooks/useTransactions";
import { TransactionForm } from "./components/finance/TransactionForm";
import { TransactionList } from "./components/finance/TransactionList";

function App() {
  const { transactions, addTransaction, removeTransaction, toggleStatus } =
    useTransactions();

  // Cálculo do saldo total (opcional, mas legal de ver)
  const balance = transactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  return (
    <div className="app-container">
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.8rem", color: "var(--color-primary)" }}>
          FinTech Dashboard
        </h1>
        <p style={{ color: "var(--color-text-secondary)" }}>
          Saldo Atual:{" "}
          <strong
            style={{
              color:
                balance >= 0 ? "var(--color-income)" : "var(--color-expense)",
            }}
          >
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(balance)}
          </strong>
        </p>
      </header>

      <main>
        <TransactionForm onAddTransaction={addTransaction} />

        <TransactionList
          transactions={transactions}
          onRemove={removeTransaction}
          onToggle={toggleStatus}
        />
      </main>
    </div>
  );
}

export default App;
